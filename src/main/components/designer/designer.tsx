import { createRef, h } from 'js-element'
import { useEffect, useState, useStyles } from 'js-element/hooks'
import Color from 'color'
import { AppLayout, HLayout, VLayout } from '../layout/layouts'
import { H3, H4, Text } from '../typography/typography'
import { useStore } from '../../store/store-hooks'

import {
  getColor,
  getContrast,
  COLOR_SHADES,
  SEMANTIC_COLORS
} from '../../theming/theme-utils'

import {
  getBaseThemeNameById,
  getAllBaseThemeIds
} from '../../theming/base-themes'

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
} from '../shoelaces/shoelace'

import colorControlStyles from './css/color-control.css'
import designerStyles from './css/designer.css'
import headerStyles from './css/header.css'
import sidebarStyles from './css/sidebar.css'
import textColorControlStyles from './css/text-color-control.css'
import themeExportDrawerStyles from './css/theme-export-drawer.css'
import tokenControlStyles from './css/token-control.css'
import tokenOverridesStyles from './css/token-overrides.css'
import paletteStyles from './css/palette.css'
import contrastInfoStyles from './css/contrast-info.css'

// === exports =======================================================

export { Designer }

// === components =====================================================

function Designer() {
  const store = useStore()

  useStyles(designerStyles)

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
        <div slot="main" class="main">
          <Alert
            class="share-theme-message"
            type="success"
            open={store.shareThemeMessageVisible}
          >
            <Icon slot="icon" name="check2-circle"></Icon>
            URL has been copied to clipboard
          </Alert>
          <Palette />
          <div class="showcases">
            <slot name="showcases" />
          </div>
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

  useStyles(headerStyles)

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

  useStyles(sidebarStyles)

  return () => {
    const customizing = store.customizing

    return (
      <VLayout class="base">
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
          <Tab slot="nav" panel="overrides">
            Overrides
          </Tab>
          <TabPanel name="colors">
            <VLayout>
              <ColorControl
                colorName="primary"
                label="Primary color"
                value={customizing.colorPrimary}
              />
              <ColorControl
                colorName="success"
                label="Success color"
                value={customizing.colorSuccess}
              />
              <ColorControl
                colorName="info"
                label="Info color"
                value={customizing.colorInfo}
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
                colorName="success"
                label="Success text"
                value={customizing.textSuccess}
              />
              <TextColorControl
                colorName="info"
                label="Info text"
                value={customizing.textInfo}
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
          <TabPanel name="overrides">
            <TokenOverrides />
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

  useStyles(colorControlStyles)

  return () => (
    <div class="base">
      <HLayout class="base">
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
    </div>
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

  useStyles(textColorControlStyles)

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
    const overrides = store.customizing.overrides
    const oldValue = (overrides as any)[name]

    if (value === '' && oldValue !== undefined) {
      const newOverrides = { ...overrides }

      delete (newOverrides as any)[name]
      store.customize({ overrides: newOverrides })
    } else if (value !== oldValue) {
      const newOverrides = { ...overrides, [name]: value }
      store.customize({ overrides: newOverrides })
    }
  }

  useStyles(tokenControlStyles)

  return () => {
    const baseTheme = store.baseTheme
    const baseValue = (baseTheme as any)[p.name]
    const storeValue = (store.customizing.overrides as any)[p.name]

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

function TokenOverrides() {
  const store = useStore()

  const [state, setState] = useState({
    filterText: ''
  })

  const onFilterTextInput = (ev: any) => {
    const value = ev.currentTarget.value.trim()

    setState({ filterText: value })
  }

  useStyles(tokenOverridesStyles)

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

function Palette() {
  const dialogRef = createRef<any>()

  useStyles(paletteStyles)

  return () => (
    <HLayout gap="huge" align="top">
      <div class="palette">
        <H4>Palette</H4>
        <table class="palette-table" cellPadding={0} cellSpacing={0}>
          <thead>
            <td />
            {SEMANTIC_COLORS.map((color) => (
              <th>{color === 'gray' ? 'neutral' : color}</th>
            ))}
          </thead>
          <tbody>
            {COLOR_SHADES.map((shade) => (
              <tr>
                <td>{shade}</td>
                {SEMANTIC_COLORS.map((color) => {
                  const style = `
                  background-color: var(--sl-color-${color}-${shade});
                `
                  return <td style={style}></td>
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <VLayout>
          <H4>Contrast</H4>
          <HLayout>
            <ContrastInfo colorName="default" />
            <ContrastInfo colorName="primary" />
            <ContrastInfo colorName="success" />
          </HLayout>
          <HLayout>
            <ContrastInfo colorName="info" />
            <ContrastInfo colorName="warning" />
            <ContrastInfo colorName="danger" />
          </HLayout>
        </VLayout>
      </div>
      <div>
        <H4>Assorted components</H4>
        <VLayout gap="medium">
          <HLayout>
            <sl-button size="small">Default</sl-button>
            <sl-button type="primary" size="small">
              Primary
            </sl-button>
            <sl-button type="success" size="small">
              Success
            </sl-button>
            <sl-button type="info" size="small">
              Info
            </sl-button>
            <sl-button type="warning" size="small">
              Warning
            </sl-button>
            <sl-button type="danger" size="small">
              Danger
            </sl-button>
          </HLayout>
          <HLayout gap="medium">
            <sl-dropdown>
              <sl-button slot="trigger" caret>
                Dropdown
              </sl-button>
              <sl-menu>
                <sl-menu-item>Dropdown Item 1</sl-menu-item>
                <sl-menu-item>Dropdown Item 2</sl-menu-item>
                <sl-menu-item>Dropdown Item 3</sl-menu-item>
                <sl-menu-divider></sl-menu-divider>
                <sl-menu-item checked>Checked</sl-menu-item>
                <sl-menu-item disabled>Disabled</sl-menu-item>
                <sl-menu-divider></sl-menu-divider>
                <sl-menu-item>
                  Prefix
                  <sl-icon slot="prefix" name="gift"></sl-icon>
                </sl-menu-item>
                <sl-menu-item>
                  Suffix Icon
                  <sl-icon slot="suffix" name="heart"></sl-icon>
                </sl-menu-item>
              </sl-menu>
            </sl-dropdown>
            <sl-range min="0" max="100" step="1"></sl-range>
          </HLayout>
          <HLayout gap="medium">
            <sl-switch>Enable some feature</sl-switch>
            <sl-button onclick={(ev: any) => dialogRef.current!.show()}>
              Press to open dialog
            </sl-button>
            <sl-dialog ref={dialogRef} label="Dialog" class="dialog-overview">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <sl-button
                slot="footer"
                type="primary"
                onclick={() => dialogRef.current!.hide()}
              >
                Close
              </sl-button>
            </sl-dialog>
          </HLayout>
          <sl-tab-group>
            <sl-tab slot="nav" panel="checkbox-radio">
              Checkbox/Radio
            </sl-tab>
            <sl-tab slot="nav" panel="rating">
              Rating
            </sl-tab>
            <sl-tab slot="nav" panel="spinner">
              Spinner
            </sl-tab>
            <sl-tab slot="nav" panel="buttons">
              Buttons
            </sl-tab>
            <sl-tab-panel name="checkbox-radio">
              <HLayout gap="huge">
                <VLayout>
                  <sl-checkbox checked>Some checkbox</sl-checkbox>
                  <sl-checkbox>Another checkbox</sl-checkbox>
                </VLayout>
                <VLayout>
                  <sl-radio name="option">Option 1</sl-radio>
                  <sl-radio name="option" checked>
                    Option 2
                  </sl-radio>
                </VLayout>
              </HLayout>
            </sl-tab-panel>
            <sl-tab-panel name="rating">
              <sl-rating precision=".5" value="2.5"></sl-rating>
            </sl-tab-panel>
            <sl-tab-panel name="spinner">
              <sl-spinner></sl-spinner>
              <sl-spinner style="font-size: 2rem;"></sl-spinner>
              <sl-spinner style="font-size: 3rem;"></sl-spinner>
            </sl-tab-panel>
            <sl-tab-panel name="buttons">
              <HLayout>
                <sl-button type="primary">Primary</sl-button>
                <sl-button type="success">Success</sl-button>
                <sl-button type="info">Info</sl-button>
                <sl-button type="warning">Warning</sl-button>
                <sl-button type="danger">Danger</sl-button>
              </HLayout>
            </sl-tab-panel>
          </sl-tab-group>
        </VLayout>
      </div>
    </HLayout>
  )
}

function ContrastInfo(p: {
  colorName: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
}) {
  const store = useStore()

  useStyles(contrastInfoStyles)

  return () => {
    let colorTxt: Color
    let colorBg: Color

    if (p.colorName === 'default') {
      colorTxt = getColor('color-black', store.customizedTheme)
      colorBg = getColor('color-white', store.customizedTheme)
    } else {
      colorBg = getColor(`color-${p.colorName}-500`, store.customizedTheme)
      colorTxt = getColor(`color-${p.colorName}-text`, store.customizedTheme)
    }

    const contrast = getContrast(Color(colorTxt), Color(colorBg))
    const contrastString = contrast.toFixed(2)
    const badgeClass = p.colorName === 'default' ? 'default-badge' : ''
    let result: string

    if (contrast >= 7) {
      result = 'level AAA'
    } else if (contrast >= 4.5) {
      result = 'level AA'
    } else {
      result = 'poor'
    }

    return (
      <div>
        <div>
          <sl-badge type={p.colorName} class={badgeClass}>
            <div class="badge-text">
              {p.colorName}: {contrastString} ({result})
            </div>
          </sl-badge>
        </div>
      </div>
    )
  }
}

function ThemeExportDrawer() {
  const store = useStore()
  const drawerRef = createRef<any>()
  const closeDrawer = () => store.setExportDrawerVisible(false)

  useStyles(themeExportDrawerStyles)

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
