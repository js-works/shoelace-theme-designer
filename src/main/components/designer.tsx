import { define, createRef, createEvent, h } from 'js-element'
import { Listener, TypedEvent } from 'js-element'
import { useEffect } from 'js-element/hooks'
import { createMobxHooks } from 'js-element/utils'
import { useEmitter } from 'js-element/hooks'
import { AppLayout, HLayout, VLayout } from './layouts'
import { H4, Text } from './typography'
import { Theme } from '../theming/types'
import Color from 'color'
import { makeObservable, action, computed, observable } from 'mobx'

import {
  createTheme,
  fromThemeToCss,
  COLOR_SHADES,
  SEMANTIC_COLORS
} from '../theming/theme-utils'

import {
  getBaseThemeById,
  getBaseThemeNameById,
  getAllBaseThemeIds
} from '../theming/base-themes'

import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js'
import SlIcon from '@shoelace-style/shoelace/dist/components/icon/icon.js'
import SlColorPicker from '@shoelace-style/shoelace/dist/components/color-picker/color-picker.js'
import SlInput from '@shoelace-style/shoelace/dist/components/input/input.js'
import SlTab from '@shoelace-style/shoelace/dist/components/tab/tab.js'
import SlTabGroup from '@shoelace-style/shoelace/dist/components/tab-group/tab-group'
import SlTabPanel from '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel'

// === exports =======================================================

export { Designer }

// === types ==========================================================

type Customizing = {
  readonly colorPrimary: string
  readonly colorInfo: string
  readonly colorSuccess: string
  readonly colorWarning: string
  readonly colorDanger: string
  readonly colorFront: string
  readonly colorBack: string
}

// === store ==========================================================

const defaultTheme = getBaseThemeById('light')

class Store {
  baseThemeId = 'light'

  customizing = {
    colorPrimary: defaultTheme['color-primary-500'],
    colorSuccess: defaultTheme['color-success-500'],
    colorInfo: defaultTheme['color-info-500'],
    colorWarning: defaultTheme['color-warning-500'],
    colorDanger: defaultTheme['color-danger-500'],
    colorFront: defaultTheme['color-black'],
    colorBack: defaultTheme['color-white']
  }

  get customizedTheme() {
    return createCustomizedTheme(
      this.customizing,
      getBaseThemeById(this.baseThemeId)
    )
  }

  get customizedCss() {
    return fromThemeToCss(this.customizedTheme)
  }

  showExportDrawer = false

  constructor() {
    makeObservable(this, {
      baseThemeId: observable,
      customizedCss: computed,
      customizedTheme: computed,
      customize: action,
      customizing: observable,
      resetTheme: action,
      showExportDrawer: observable
    })
  }

  customize(values: Partial<Customizing>) {
    Object.assign(this.customizing, values)
  }

  resetTheme() {
    const baseTheme = getBaseThemeById(this.baseThemeId)

    this.customizing.colorPrimary = baseTheme['color-primary-500']
    this.customizing.colorSuccess = baseTheme['color-success-500']
    this.customizing.colorInfo = baseTheme['color-info-500']
    this.customizing.colorWarning = baseTheme['color-warning-500']
    this.customizing.colorDanger = baseTheme['color-danger-500']
    this.customizing.colorFront = baseTheme['color-black']
    this.customizing.colorBack = baseTheme['color-white']
  }
}

const [useStoreProvider, useStore] = createMobxHooks<Store>()

// === components =====================================================

let nextDesignerId = 1

const Designer = define({
  name: 'sx-designer',
  slots: ['showcases'],
  styles: () => styles.designer
})(() => {
  const store = useStoreProvider(new Store())
  const designerId = nextDesignerId + 1

  return () => (
    <div class={`base sl-theme--designer-${designerId}`}>
      <style>
        {`.sl-theme--designer-${designerId} {`}
        {store.customizedCss}
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
          <Header
            onExport={() => (document.getElementById('drawer') as any).open()}
          />
        </div>
        <div slot="sidebar" class="sidebar">
          <Sidebar />
        </div>
        <div slot="main" class="showcases">
          <slot name="showcases" class="showcases" />
        </div>
      </AppLayout>
    </div>
  )
})

const Header = define({
  name: 'sx-designer--header',
  uses: [SlIcon, SlButton],
  styles: () => styles.header,

  props: class {
    onExport?: Listener<TypedEvent<'sx-export'>>
  }
})((p) => {
  const emit = useEmitter()

  const onExportClick = () => {
    emit(createEvent('sx-export'), p.onExport)
  }

  return () => (
    <div class="base">
      <div class="brand">Shoelace Theme Designer</div>
      <div class="actions">
        <sl-button type="primary" size="medium" onclick={onExportClick}>
          Export Theme
        </sl-button>
      </div>
    </div>
  )
})

const Sidebar = define({
  name: 'sx-designer--sidebar',
  styles: () => styles.sidebar
})(() => {
  const store = useStore()
  const resetColors = () => store.resetTheme()

  let ignore = false

  const onBaseThemeChange = (ev: any) => {
    if (ignore) {
      return
    }

    ignore = true

    setTimeout(() => (ignore = false))

    const selectedBaseThemeId = ev.target.value

    if (store.baseThemeId === selectedBaseThemeId) {
      return
    }

    store.baseThemeId = selectedBaseThemeId
    store.resetTheme()
  }

  return () => {
    const customizing = store.customizing

    const createColorListener = (type: string) => {
      return (ev: any) => {
        const newCustomizing: any = { ...customizing }
        newCustomizing[type] = ev.detail.value
        store.customize(newCustomizing)
      }
    }

    return (
      <VLayout class="base">
        <br />
        <HLayout gap="small">
          <Text>Base theme:</Text>
          <sl-select
            class="theme-selector"
            onsl-change={onBaseThemeChange}
            value={store.baseThemeId}
          >
            {getAllBaseThemeIds().map((id) => (
              <sl-menu-item value={id}>{getBaseThemeNameById(id)}</sl-menu-item>
            ))}
          </sl-select>
        </HLayout>
        <H4>Theme colors</H4>
        <ColorField
          label="Primary color"
          value={customizing.colorPrimary}
          onColorChange={createColorListener('colorPrimary')}
        />
        <ColorField
          label="Info color"
          value={customizing.colorInfo}
          onColorChange={createColorListener('colorInfo')}
        />
        <ColorField
          label="Success color"
          value={customizing.colorSuccess}
          onColorChange={createColorListener('colorSuccess')}
        />
        <ColorField
          label="Warning color"
          value={customizing.colorWarning}
          onColorChange={createColorListener('colorWarning')}
        />
        <ColorField
          label="Danger color"
          value={customizing.colorDanger}
          onColorChange={createColorListener('colorDanger')}
        />
        <ColorField
          label="Front color"
          value={customizing.colorFront}
          onColorChange={createColorListener('colorFront')}
        />
        <ColorField
          label="Back color"
          value={customizing.colorBack}
          onColorChange={createColorListener('colorBack')}
        />
        <HLayout class="color-actions" gap="small">
          <sl-button onclick={resetColors}>Reset colors</sl-button>
        </HLayout>
      </VLayout>
    )
  }
})

const ColorField = define({
  name: 'sx-designer--color-field',
  uses: [SlColorPicker, SlInput],
  styles: () => styles.colorField,

  props: class {
    label?: string
    value?: string
    onColorChange?: Listener<TypedEvent<'sx-color-change', { value: string }>>
  }
})((p) => {
  const emit = useEmitter()

  const onChange = (ev: any) => {
    emit(
      createEvent('sx-color-change', { value: ev.target.value }),
      p.onColorChange
    )
  }

  return () => (
    <HLayout>
      <label>{p.label}:</label>
      <span>{p.value}</span>
      <sl-color-picker
        format="hex"
        no-format-toggle
        size="small"
        value={p.value}
        hoist
        onsl-change={onChange}
      ></sl-color-picker>
    </HLayout>
  )
})

const ThemeExportDrawer = define({
  name: 'sx-designer--theme-export-drawer',
  uses: [SlTab, SlTabGroup, SlTabPanel],
  styles: () => styles.themeExportDrawer,

  props: class {
    open = false
  }
})((p) => {
  const drawerRef = createRef<any>()
  const closeDrawer = () => drawerRef.current!.hide()

  useEffect(
    () => drawerRef.current && drawerRef.current[p.open ? 'show' : 'hide'](),
    () => [p.open]
  )

  return () => (
    <sl-drawer
      id="drawer"
      ref={drawerRef}
      label="Export theme"
      class="drawer-overview"
    >
      <sl-tab-group>
        <sl-tab slot="nav" panel="code">
          Code
        </sl-tab>
        <sl-tab slot="nav" panel="json">
          JSON
        </sl-tab>
        <sl-tab-panel name="code">
          <pre>
            blalb bla bla
            <br />
            blablaxxx
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blalb bla bla
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
            blablaxxx
            <br />
          </pre>
        </sl-tab-panel>
        <sl-tab-panel name="json">
          <pre></pre>
        </sl-tab-panel>
      </sl-tab-group>
      <sl-button slot="footer" type="primary" onclick={closeDrawer}>
        Close
      </sl-button>
    </sl-drawer>
  )
})

// === theme customizer  =============================================

function createCustomizedTheme(
  customizing: Customizing,
  baseTheme: Theme
): Theme {
  const isDark = Color(customizing.colorBack).isDark()

  const newTokens: Partial<Theme> = {
    'color-primary-500': customizing.colorPrimary,
    'color-success-500': customizing.colorSuccess,
    'color-info-500': customizing.colorInfo,
    'color-warning-500': customizing.colorWarning,
    'color-danger-500': customizing.colorDanger,
    'color-black': customizing.colorFront,
    'color-white': customizing.colorBack
  }

  for (const color of SEMANTIC_COLORS) {
    const key500 = `color-${color}-500`
    const value500 = getProp(newTokens, key500)

    if (value500 !== getProp(baseTheme, key500)) {
      for (const shade of COLOR_SHADES) {
        let newColor: Color
        const colorName = `color-${color}-${shade}`

        if (shade === 500) {
          continue
        } else if (shade < 500) {
          newColor = Color(value500).lighten((500 - shade) / 400)
        } else if (shade > 500) {
          newColor = Color(value500).darken((shade - 400) / 500)
        }

        setProp(newTokens, colorName, newColor!)
      }
    }
    //if (getProp(newTokens, color500) !== getProp(defaultTheme, color500) {
    //  setProp(newTokens, color500, 'red')
    //}
  }

  return createTheme(newTokens, baseTheme)
}

// === helpers =======================================================

function getProp(obj: object, name: string): any {
  return (obj as any)[name]
}

function setProp(obj: object, name: string, value: any) {
  ;(obj as any)[name] = value
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
      height: 100%;
      padding: 10px 30px 10px 20px;
      box-sizing: border-box;
      border: 1px solid var(--sl-color-gray-200);
      border-width: 0 1px 0 0;
      background-color: var(--sl-color-white);
    }

    .showcases {
      padding: 10px 30px;
      background-color: var(--sl-color-white);
    }
  `,

  header: `
    .base {
      display: flex;
      align-items: center;
      font-family: var(--sl-font-sans);
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
      color: var(--sl-color-black)
    }

    .theme-selector {
      width: 12em;
    }

    .color-actions {
      margin: 18px 18px 0 0;
      text-align: right;
    }
  `,

  colorField: `
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

  showcases: `
    color: var(--sl-color-black)
  `,

  themeExportDrawer: `
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
