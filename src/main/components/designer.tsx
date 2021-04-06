import { define, createRef, createEvent, h } from 'js-element'
import { Listener, TypedEvent } from 'js-element'
import { useEffect } from 'js-element/hooks'
import { microstore } from 'js-element/utils'
import { useEmitter } from 'js-element/hooks'
import { AppLayout, HLayout, VLayout } from './layouts'
import { defaultTheme } from '../theming/default-theme'
import { createTheme, fromThemeToCss } from '../theming/theme-utils'
import { Theme } from '../theming/types'
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
  readonly darkMode: boolean
}

// === store ==========================================================

const [useStoreProvider, useStore] = microstore(() => {
  return {
    customizing: {
      colorPrimary: defaultTheme['color-primary-500'],
      colorSuccess: defaultTheme['color-success-500'],
      colorInfo: defaultTheme['color-info-500'],
      colorWarning: defaultTheme['color-warning-500'],
      colorDanger: defaultTheme['color-danger-500'],
      darkMode: false
    },

    theme: defaultTheme,
    themeCss: fromThemeToCss(defaultTheme),

    showExportDrawer: false,

    customize(values: Partial<Customizing>) {
      Object.assign(this.customizing, values)
      this.theme = getCustomizedTheme(this.customizing)
      this.themeCss = fromThemeToCss(this.theme)
    },

    resetColors() {
      this.customizing.colorPrimary = defaultTheme['color-primary-500']
      this.customizing.colorSuccess = defaultTheme['color-success-500']
      this.customizing.colorInfo = defaultTheme['color-info-500']
      this.customizing.colorWarning = defaultTheme['color-warning-500']
      this.customizing.colorDanger = defaultTheme['color-danger-500']
    }
  }
})

// === components =====================================================

let nextDesignerId = 1

const Designer = define({
  name: 'sx-designer',
  slots: ['showcases'],
  styles: () => styles.designer
})(() => {
  const store = useStoreProvider()
  const designerId = nextDesignerId + 1

  return () => (
    <div class={`base sl-theme--designer-${designerId}`}>
      <style>
        {`.sl-theme--designer-${designerId} {`}
        {store.themeCss}
        {'}'}
      </style>
      <ThemeExportDrawer />
      <AppLayout>
        <div slot="header" class="header">
          <Header
            onExport={() => (document.getElementById('drawer') as any).open()}
          />
        </div>
        <div slot="sidebar" class="sidebar">
          <Sidebar />
        </div>
        <div slot="main" class="showcases">
          <slot name="showcases" />
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
        <sl-button type="primary" onclick={onExportClick}>
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
  const resetColors = () => store.resetColors()

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
      <VLayout>
        <h3 class="headline">Basic theme colors</h3>
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
        <div class="color-actions">
          <sl-button size="small" onclick={resetColors}>
            Reset colors
          </sl-button>
        </div>
        <h3 class="headline">Dark mode</h3>
        <HLayout class="dark-mode">
          <sl-switch value={customizing.darkMode} />
          <label>Enable dark mode</label>
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
    () => drawerRef.current[p.open ? 'show' : 'hide'](),
    () => [p.open]
  )

  return () => (
    <sl-drawer
      id="drawer"
      ref={drawerRef}
      label="Export theme"
      class="drawer-overview"
      style="height: 100%; border: 1px solid red;"
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

// === helpers =======================================================

function getCustomizedTheme(customizing: Customizing): Theme {
  const newTheme = createTheme({
    'color-primary-500': customizing.colorPrimary,
    'color-success-500': customizing.colorSuccess,
    'color-info-500': customizing.colorInfo,
    'color-warning-500': customizing.colorWarning,
    'color-danger-500': customizing.colorDanger
  })

  return newTheme
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

    .header {
      padding: 5px 10px 6px 10px;
      height: 51px;
      width: 100%;
      box-sizing: border-box;
      box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
      border-width: 0 0 1px 0;
      border-style: solid;
      border-color: var(--sl-color-gray-200)
    }

    .sidebar {
      height: 100%;
      padding: 10px 30px 10px 20px;
      box-sizing: border-box;
      border: 1px solid var(--sl-color-gray-200);
      border-width: 0 1px 0 0;
    }

    .showcases {
      padding: 10px 30px;
    }

    .dark-mode {
      padding-left: 0.5em;
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
    .headline {
      font-weight: 600;
      font-size: var(--sl-font-size-medium);
    }

    .color-actions {
      margin: 12px 0 0 0;
      text-align: right;
    }
  `,

  colorField: `
    label {
      width: 7em;
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
