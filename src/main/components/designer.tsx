import { createRef, h } from 'js-element'
import { useEffect, useState, useStyles } from 'js-element/hooks'
import { createMobxHooks } from 'js-element/utils'
import { makeObservable, action, computed, observable } from 'mobx'
import Color from 'color'
import { AppLayout, HLayout, VLayout } from './layouts'
import { Text } from './typography'
import { Customizing } from '../theming/types'

import {
  createCustomizedTheme,
  fromThemeToCss,
  fromThemeToJson,
  SEMANTIC_COLORS,
  serializeCustomization
} from '../theming/theme-utils'

import {
  getBaseThemeById,
  getBaseThemeNameById,
  getAllBaseThemeIds
} from '../theming/base-themes'

import {
  Alert,
  Badge,
  Button,
  ColorPicker,
  Drawer,
  Icon,
  Input,
  MenuItem,
  Select,
  Tab,
  TabGroup,
  TabPanel
} from './shoelace'

// === exports =======================================================

export { Designer }

// === store ==========================================================

const defaultTheme = getBaseThemeById('light')

class Store {
  baseThemeId = 'light'
  shareThemeMessageVisible = false
  exportDrawerVisible = false

  customizing: Customizing = {
    colorPrimary: defaultTheme['color-primary-500'],
    colorSuccess: defaultTheme['color-success-500'],
    colorInfo: defaultTheme['color-info-500'],
    colorWarning: defaultTheme['color-warning-500'],
    colorDanger: defaultTheme['color-danger-500'],
    colorGray: defaultTheme['color-gray-500'],
    colorFront: defaultTheme['color-black'],
    colorBack: defaultTheme['color-white'],

    textPrimary: 'default',
    textInfo: 'default',
    textSuccess: 'default',
    textWarning: 'default',
    textDanger: 'default',

    inverted: false,

    overwrites: {}
  }

  get baseTheme() {
    return getBaseThemeById(this.baseThemeId)
  }

  get customizedTheme() {
    return createCustomizedTheme(this.customizing, this.baseTheme)
  }

  get customizedCss() {
    return fromThemeToCss(this.customizedTheme)
  }

  get customizedJson() {
    return fromThemeToJson(this.customizedTheme)
  }

  get themeModified() {
    const baseTheme = this.baseTheme
    const customizedTheme = this.customizedTheme

    for (const color of SEMANTIC_COLORS) {
      if (
        color !== 'gray' &&
        (this.customizing as any)[
          'text' + color[0].toUpperCase() + color.substr(1)
        ] !== 'default'
      ) {
        return true
      }
    }

    for (const key of Object.keys(customizedTheme)) {
      if ((customizedTheme as any)[key] !== (baseTheme as any)[key]) {
        return true
      }
    }

    return false
  }

  constructor() {
    makeObservable(this, {
      baseThemeId: observable,
      baseTheme: computed,
      customizedCss: computed,
      customizedJson: computed,
      customizedTheme: computed,
      customize: action,
      customizing: observable.ref,
      exportDrawerVisible: observable,
      invertTheme: action,
      resetTheme: action,
      setBaseThemeId: action,
      setExportDrawerVisible: action,
      setShareThemeMessageVisible: action,
      shareThemeMessageVisible: observable,
      themeModified: computed
    })
  }

  setBaseThemeId(id: string) {
    this.baseThemeId = id
  }

  setShareThemeMessageVisible(value: boolean) {
    this.shareThemeMessageVisible = value
  }

  setExportDrawerVisible(value: boolean) {
    this.exportDrawerVisible = value
  }

  customize(values: Partial<Customizing>) {
    this.customizing = Object.assign({}, this.customizing, values)
  }

  invertTheme() {
    const colorFront = this.customizing.colorFront
    const colorBack = this.customizing.colorBack

    this.customizing = {
      ...this.customizing,
      colorFront: colorBack,
      colorBack: colorFront,
      inverted: !this.customizing.inverted
    }
  }

  resetTheme() {
    const baseTheme = this.baseTheme

    this.customizing = {
      colorPrimary: baseTheme['color-primary-500'],
      colorSuccess: baseTheme['color-success-500'],
      colorInfo: baseTheme['color-info-500'],
      colorWarning: baseTheme['color-warning-500'],
      colorDanger: baseTheme['color-danger-500'],
      colorGray: baseTheme['color-gray-500'],
      colorFront: baseTheme['color-black'],
      colorBack: baseTheme['color-white'],

      textPrimary: 'default',
      textInfo: 'default',
      textSuccess: 'default',
      textWarning: 'default',
      textDanger: 'default',

      inverted: false,

      overwrites: {}
    }
  }

  copyToClipboard() {
    const base64String = serializeCustomization({
      baseThemeId: this.baseThemeId,
      customizing: this.customizing
    })

    const url = `${location.href.split('#')[0]}#${base64String}`
    navigator.clipboard.writeText(url)
  }
}

// === store hooks ===================================================

const [useStoreProvider, useStore] = createMobxHooks<Store>()

// === components =====================================================

function Designer(p: {
  initialBaseThemeId?: string
  initialCustomizing?: Customizing
}) {
  const store = useStoreProvider(new Store())

  if (p.initialBaseThemeId) {
    store.setBaseThemeId(p.initialBaseThemeId)
  }

  if (p.initialCustomizing) {
    store.customize(p.initialCustomizing)
  }

  useStyles(styles.designer)

  return () => (
    <div>
      <style>
        {':host {'}
        {store.customizedCss}
        font-family: var(--sl-font-sans); color: var(--sl-color-black);
        {'}'}
      </style>
      <ThemeExportDrawer />
      <AppLayout>
        <div
          slot="header"
          class={
            Color(store.customizing.colorBack).isDark()
              ? 'header'
              : 'header header-with-shadow'
          }
        >
          <Header />
        </div>
        <div slot="sidebar" class="sidebar">
          <Sidebar />
        </div>
        <div slot="main" class="showcases">
          <Alert
            class="share-theme-message"
            type="success"
            open={store.shareThemeMessageVisible}
          >
            <Icon slot="icon" name="check2-circle"></Icon>
            URL has been copied to clipboard
          </Alert>
          <slot name="showcases" />
        </div>
      </AppLayout>
    </div>
  )
}

function Header() {
  const store = useStore()

  const onShareClick = () => {
    store.copyToClipboard()
    store.setShareThemeMessageVisible(true)

    setTimeout(() => {
      store.setShareThemeMessageVisible(false)
    }, 2000)
  }

  const onExportClick = () => {
    if (!store.exportDrawerVisible) {
      store.setExportDrawerVisible(true)
    }
  }

  useStyles(styles.header)

  return () => (
    <div class="base">
      <div class="brand">Shoelace Theme Designer</div>
      <div class="actions">
        <HLayout gap="small">
          <Button type="default" onclick={onShareClick}>
            Share theme
          </Button>
          <Button type="default" onclick={onExportClick}>
            Export theme
          </Button>
        </HLayout>
      </div>
    </div>
  )
}

function Sidebar() {
  const store = useStore()
  const invertTheme = () => store.invertTheme()
  const resetTheme = () => store.resetTheme()

  const onBaseThemeChange = (ev: any) => {
    const selectedBaseThemeId = ev.target.value

    if (store.baseThemeId === selectedBaseThemeId) {
      return
    }

    store.setBaseThemeId(selectedBaseThemeId)
    store.resetTheme()
  }

  useStyles(styles.sidebar)

  return () => {
    const customizing = store.customizing

    return (
      <VLayout class="base">
        <br />
        <HLayout gap="small">
          <Text>Base theme:</Text>
          <Select
            class="theme-selector"
            onsl-change={onBaseThemeChange}
            value={store.baseThemeId}
          >
            {getAllBaseThemeIds().map((id) => (
              <MenuItem key={id} value={id}>
                {getBaseThemeNameById(id)}
              </MenuItem>
            ))}
          </Select>
        </HLayout>
        <div class="modified-badge">
          {store.themeModified ? (
            <Badge type="warning">modified</Badge>
          ) : (
            <Badge type="info">original</Badge>
          )}
        </div>
        <TabGroup class="sidebar-tabs">
          <Tab slot="nav" panel="colors">
            Colors
          </Tab>
          <Tab slot="nav" panel="text">
            Text
          </Tab>
          <Tab slot="nav" panel="overwrites">
            Overwrites
          </Tab>
          <TabPanel name="colors">
            <VLayout>
              <ColorControl
                colorName="primary"
                label="Primary color"
                value={customizing.colorPrimary}
              />
              <ColorControl
                colorName="info"
                label="Info color"
                value={customizing.colorInfo}
              />
              <ColorControl
                colorName="success"
                label="Success color"
                value={customizing.colorSuccess}
              />
              <ColorControl
                colorName="warning"
                label="Warning color"
                value={customizing.colorWarning}
              />
              <ColorControl
                colorName="danger"
                label="Danger color"
                value={customizing.colorDanger}
              />
              <ColorControl
                colorName="gray"
                label="Neutral color"
                value={customizing.colorGray}
              />
              <ColorControl
                colorName="front"
                label="Front color"
                value={customizing.colorFront}
              />
              <ColorControl
                colorName="back"
                label="Back color"
                value={customizing.colorBack}
              />
            </VLayout>
          </TabPanel>
          <TabPanel name="text">
            <VLayout gap="small">
              <Text size="small">
                Please select whether the default text colors shall be used or
                whether front or back color shall be enforced instead.
              </Text>
              <br />
              <TextColorControl
                colorName="primary"
                label="Primary text"
                value={customizing.textPrimary}
              />
              <TextColorControl
                colorName="info"
                label="Info text"
                value={customizing.textInfo}
              />
              <TextColorControl
                colorName="success"
                label="Success text"
                value={customizing.textSuccess}
              />
              <TextColorControl
                colorName="warning"
                label="Warning text"
                value={customizing.textWarning}
              />
              <TextColorControl
                colorName="danger"
                label="Danger text"
                value={customizing.textDanger}
              />
            </VLayout>
          </TabPanel>
          <TabPanel name="overwrites">
            <TokenOverwrites />
          </TabPanel>
        </TabGroup>
        <HLayout class="color-actions" gap="small">
          <Button onclick={invertTheme}>Invert theme</Button>
          <Button onclick={resetTheme} disabled={!store.themeModified}>
            Reset theme
          </Button>
        </HLayout>
      </VLayout>
    )
  }
}

function ColorControl(p: {
  label: string
  value: string

  colorName:
    | 'primary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'gray'
    | 'front'
    | 'back'
}) {
  const store = useStore()

  const onChange = (ev: any) => {
    if (p.colorName) {
      const propName =
        'color' + p.colorName[0].toUpperCase() + p.colorName.substr(1)

      store.customize({ [propName]: ev.target.value })
    }
  }

  useStyles(styles.colorControl)

  return () => (
    <HLayout>
      <label>{p.label}:</label>
      <span>{p.value?.toUpperCase()}</span>
      <ColorPicker
        format="hex"
        no-format-toggle
        size="small"
        value={p.value}
        hoist
        onsl-change={onChange}
      ></ColorPicker>
    </HLayout>
  )
}

function TextColorControl(p: {
  colorName: string
  label: string
  value: 'default' | 'back' | 'front'
}) {
  const store = useStore()

  const onChange = (ev: any) => {
    if (p.colorName) {
      const propName =
        'text' + p.colorName[0].toUpperCase() + p.colorName.substr(1)

      store.customize({ [propName]: ev.target.value })
    }
  }

  useStyles(styles.textColorControl)

  return () => {
    return (
      <HLayout>
        <label class="label">{p.label}:</label>
        <Select value={p.value} size="small" onsl-change={onChange}>
          <MenuItem value="default">default</MenuItem>
          <MenuItem value="back">back color</MenuItem>
          <MenuItem value="front">front color</MenuItem>
        </Select>
      </HLayout>
    )
  }
}

function TokenControl(p: { name: string }) {
  const store = useStore()

  const onTokenChange = (ev: any) => {
    const value = ev.currentTarget.value.trim()
    ev.currentTarget.value = value

    const name = p.name
    const overwrites = store.customizing.overwrites
    const oldValue = (overwrites as any)[name]

    if (value === '' && oldValue !== undefined) {
      const newOverwrites = { ...overwrites }

      delete (newOverwrites as any)[name]
      store.customize({ overwrites: newOverwrites })
    } else if (value !== oldValue) {
      const newOverwrites = { ...overwrites, [name]: value }
      store.customize({ overwrites: newOverwrites })
    }
  }

  useStyles(styles.tokenControl)

  return () => {
    const baseTheme = store.baseTheme
    const baseValue = (baseTheme as any)[p.name]
    const storeValue = (store.customizing.overwrites as any)[p.name]

    return (
      <div class="base">
        <label class={!storeValue ? 'label' : 'label label-bold'}>
          {p.name}
        </label>
        <Input
          class="input"
          size="small"
          value={storeValue}
          placeholder={baseValue}
          onsl-change={onTokenChange}
        ></Input>
      </div>
    )
  }
}

function TokenOverwrites() {
  const store = useStore()

  const [state, setState] = useState({
    filterText: ''
  })

  const onFilterTextInput = (ev: any) => {
    const value = ev.currentTarget.value.trim()

    setState({ filterText: value })
  }

  useStyles(styles.tokenOverwrites)

  return () => {
    return (
      <div class="base">
        <Input
          class="filter-field"
          placeholder="Filter..."
          size="small"
          onsl-input={onFilterTextInput}
          clearable
          pill
        />
        <div class="scroll-pane">
          {Object.keys(store.baseTheme)
            .filter(
              (tokenName) =>
                state.filterText === '' || tokenName.includes(state.filterText)
            )
            .map((tokenName) => {
              return <TokenControl name={tokenName} />
            })}
        </div>
      </div>
    )
  }
}

function ThemeExportDrawer() {
  const store = useStore()
  const drawerRef = createRef<any>()
  const closeDrawer = () => store.setExportDrawerVisible(false)

  useStyles(styles.themeExportDrawer)

  useEffect(
    () => {
      if (!drawerRef.current) {
        return
      }

      if (store.exportDrawerVisible) {
        drawerRef.current!.show()
      } else {
        drawerRef.current!.hide()
      }
    },
    () => [store.exportDrawerVisible]
  )

  return () => (
    <Drawer
      id="drawer"
      label="Export theme"
      class="drawer"
      open={store.exportDrawerVisible}
      onsl-hide={closeDrawer}
    >
      <TabGroup>
        <Tab slot="nav" panel="css">
          CSS properties
        </Tab>
        <Tab slot="nav" panel="json">
          JSON
        </Tab>
        <TabPanel name="css">
          <pre>{store.customizedCss}</pre>
        </TabPanel>
        <TabPanel name="json">
          <pre>{store.customizedJson}</pre>
        </TabPanel>
      </TabGroup>
      <Button slot="footer" type="primary" onclick={closeDrawer}>
        Close
      </Button>
    </Drawer>
  )
}

// === styles ========================================================

const styles = {
  designer: `
    :host {
      position: absolute;
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin: 0;
      overflow: hidden;
    }

    .base {
      color: var(--sl-color-black);
      background-color: var(--sl-color-white);
    }

    .header {
      padding: 5px 10px 6px 10px;
      height: 51px;
      width: 100%;
      box-sizing: border-box;
      border-width: 0 0 1px 0;
      border-style: solid;
      border-color: var(--sl-color-gray-200);
      background-color: var(--sl-color-white);
    }

    .header-with-shadow {
      box-shadow: var(--sl-color-gray-300) 0px 8px 24px;
    }

    .sidebar {
      width: 380px;
      height: 100%;
      padding: 0 30px 10px 20px;
      box-sizing: border-box;
      border: 1px solid var(--sl-color-gray-200);
      border-width: 0 1px 0 0;
      background-color: var(--sl-color-white);
    }

    .share-theme-message {
      position: fixed;
      top: 3.5em;
      right: 2em;
      display: inline-block;
      width: 19em;
      text-align: right;
      z-index: 20000;
    }

    .showcases {
      position: relative;
      padding: 10px 30px;
      background-color: var(--sl-color-white);
    }
  `,

  header: `
    .base {
      position: relative;
      display: flex;
      align-items: center;
    }

    .brand {
      font-weight: normal;
      font-size: var(--sl-font-size-large);
      background-image: url('https://www.svgrepo.com/show/221575/pantone-color-palette.svg');
      background-repeat: no-repeat;
      padding: 0 0 0 38px;
      flex-grow: 1;
    }
  `,

  sidebar: `
    .base {
      color: var(--sl-color-black);
    }

    .theme-selector {
      width: 12em;
    }

    .modified-badge {
      margin-top: -0.25em;
    }

    .sidebar-tabs {
      margin-top: 1.5em;
      width: 340px;
      height: 420px;
    }

    .color-actions {
      margin: 10px 18px 0 0;
      text-align: right;
    }
  `,

  colorControl: `
    label {
      width: 9em;
      height: 2.3em;
      padding: 0 0 0 0.5em;
    }

    span {
      width: 4.5em;
    }

    sl-color-picker {
      margin-top: -4px;
    }
  `,

  textColorControl: `
    .label {
      margin: 0 0 0 1em;
      width: 7em;
    }

    sl-select {
      width: 8em;
    }
  `,

  tokenControl: `
    .base {
      display: flex;
      margin: 2px 0;
      align-items: center;
    }

    .label {
      width: 10em;
      font-size: var(--sl-font-size-small);
      margin: 0 0.25em 0 0;
    }
    
    .label-bold {
      font-weight: var(--sl-font-weight-bold);
      font-style: italic;
    }

    .input {
      width: 8em;
    }
  `,

  tokenOverwrites: `
    .base {
    }

    .filter-field {
      margin: -8px 20px 10px 20px;
    }

    .scroll-pane {
      max-height: 300px;
      width: 300px;
      overflow: auto;
    }
  `,

  themeExportDrawer: `
    .drawer {
      --size: 500px;
    }

    pre {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right 0;
      height: 500px;
      width: 100%;
      overflow: auto; 
      border: 1px solid var(--sl-color-gray-400);
    }
  `
}
