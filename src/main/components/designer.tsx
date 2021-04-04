import { define, createRef, createEvent, h } from 'js-element'
import { Listener, TypedEvent } from 'js-element'
import { createStoreHooks, useActions, useEffect } from 'js-element/hooks'
import { useEmitter, useOnMount, useState, useStyles } from 'js-element/hooks'
import * as Shoelace from '@shoelace-style/shoelace'

import { defineMessages } from 'js-messages'
import { createReducer, on } from 'js-reducers'
import { createStore } from 'js-stores'

import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities'
import { defaultTheme } from '../default-theme'
import { Theme } from '../types'
import { loadTheme } from '../theme-utils'

// === exports =======================================================

export { Designer }

// === ugly stuff ====================================================

registerIconLibrary('default', {
  resolver: (name) =>
    `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.36/dist/assets/icons/${name}.svg`,

  mutator: (svg) => svg.setAttribute('fill', 'currentColor')
})

// === types ==========================================================

type Customizing = {
  readonly colorPrimary: string
  readonly colorInfo: string
  readonly colorSuccess: string
  readonly colorWarning: string
  readonly colorDanger: string
  readonly darkMode: boolean
}

type State = {
  customizing: Customizing
  showExportDrawer: boolean
}

// === messages =======================================================

const Actions = defineMessages('designer', {
  customize: (customizing: Customizing) => ({ customizing }),
  showExportDrawer: null,
  hideExportDrawer: null
})

// === initialState ==================================================

function getBaseCustomizing(theme: Theme): Customizing {
  return {
    colorPrimary: theme['color-primary-500'],
    colorInfo: theme['color-info-500'],
    colorSuccess: theme['color-success-500'],
    colorWarning: theme['color-warning-500'],
    colorDanger: theme['color-danger-500'],
    darkMode: false
  }
}

const initialState: State = {
  customizing: getBaseCustomizing(defaultTheme),
  showExportDrawer: false
}

// === reducer =======================================================

const reducer = createReducer(initialState, [
  on(Actions.customize, (state, { customizing }) => {
    state.customizing = customizing
  }),

  on(Actions.showExportDrawer, (state) => {
    state.showExportDrawer = true
  }),

  on(Actions.hideExportDrawer, (state) => {
    state.showExportDrawer = false
  })
])

// === selectors ======================================================

const Selectors = {
  customizing(state: State) {
    return state.customizing
  }
}

// === store hooks ====================================================

// useActions
const [useStore, useSelectors] = createStoreHooks<State>()

// === components =====================================================

const Designer = define({
  name: 'sx-designer'
})(() => {
  useStore(createStore(reducer))

  return () => <DesignerInner />
})

const DesignerInner = define({
  name: 'sx-designer-inner'
})(() => {
  loadTheme('designer', defaultTheme)

  useStyles(`
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
      padding: 3px 10px;
      height: 50px;
      width: 100%;
      box-sizing: border-box;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    .content {
      position: relative;
      display: flex;
    }
    
    .sidebar {
      width: 300px;
      height: 100%;
      border-width: 0 1px 0 0;
      border-style: solid;
      border-color: var(--sl-color-gray-200);
      padding: 12px 20px;
      box-sizing: border-box;
    }

    .showcases-container {
      position: absolute;
      bottom: 0;
      display: flex;
      bottom: 0;
      top: 53px;
      left: 300px;
      right: 0;
      overflow: hidden;
    }

    .showcases {
      padding: 10px 30px;
      height: 100%;
      width: 100%;
      overflow: scroll;
      align-self: stretch;
    }

    .headline {
      font-weight: 600;
      font-size: var(--sl-font-size-medium);
    }

    .dark-mode {
      padding-left: 0.5em;
    }
  `)

  const actions = useActions(Actions)
  const selectors = useSelectors(Selectors)

  return () => {
    const customizing = selectors.customizing

    const createColorListener = (type: string) => {
      return (ev: any) => {
        const newCustomizing: any = { ...customizing }
        newCustomizing[type] = ev.detail.value
        actions.customize(newCustomizing)
      }
    }
    return (
      <div class="base sl-theme-designer">
        <ThemeExportDrawer />
        <table style="width: 100%; height: calc(100% - 53px); position: absolute;">
          <thead style="height: 30px">
            <tr>
              <th colSpan={2} style="text-align: left">
                <div class="header">
                  <DesignerHeader
                    onExport={() =>
                      (document.getElementById('drawer') as any).open()
                    }
                  />
                </div>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="height: 100%">
                <div class="sidebar">
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
                    <h3 class="headline">Dark mode</h3>
                    <HLayout class="dark-mode">
                      <sl-switch value={customizing.darkMode} />
                      <label>Enable dark mode</label>
                    </HLayout>
                  </VLayout>
                </div>
              </td>
              <td>
                <div class="showcases-container">
                  <div class="showcases">
                    <AlertShowcase />
                    <AvatarShowcase />
                    <BadgeShowcase />
                    <ButtonShowcase />
                    <IconShowcase />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
})

const DesignerHeader = define({
  name: 'sx-designer-header',
  uses: [Shoelace.SlIcon, Shoelace.SlButton],
  props: class {
    onExport?: Listener<TypedEvent<'sx-export'>>
  }
})((p) => {
  useStyles(`
    .base {
      display: flex;
      align-items: center;
      font-family: var(--sl-font-sans);
    }

    .brand {
      font-weight: normal;
      font-size: var(--sl-font-size-large);
      background-image: url('https://www.svgrepo.com/show/34997/palette.svg');
      background-repeat: no-repeat;
      padding: 0 0 0 40px;
      flex-grow: 1;
    }
  `)

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

const Showcase = define({
  name: 'sx-showcase',
  slots: ['default'],
  props: class {
    title = ''
  }
})((p) => {
  useStyles(`
    .base {
      margin: 10px 0 75px 0;
    }

    h3 {
      font-weight: 600;
      font-family: var(--sl-font-sans);
      font-size: var(--sl-font-size-large);
    } 
  `)

  return () => (
    <div class="base">
      <h3>{p.title}</h3>
      <slot />
    </div>
  )
})

const HLayout = define({
  name: 'sx-hlayout',
  slots: ['deault']
})(() => {
  useStyles(`
    div {
      display: flex;
      gap: 6px;
      font-size: var(--sl-font-size-medium);
      font-family: var(--sl-font-sans);
    }
  `)

  return () => (
    <div>
      <slot />
    </div>
  )
})

const VLayout = define({
  name: 'sx-vlayout',
  slots: ['default']
})(() => {
  useStyles(`
    div {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: var(--sl-font-size-medium);
      font-family: var(--sl-font-sans);
    }
  `)

  return () => (
    <div>
      <slot />
    </div>
  )
})

const ColorField = define({
  name: 'sx-color-field',
  uses: [Shoelace.SlColorPicker, Shoelace.SlInput],
  props: class {
    label?: string
    value?: string
    onColorChange?: Listener<TypedEvent<'sx-color-change', { value: string }>>
  }
})((p) => {
  useStyles(`
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
  `)

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
        size="small"
        value={p.value}
        onsl-change={onChange}
      ></sl-color-picker>
    </HLayout>
  )
})

const ThemeExportDrawer = define({
  name: 'sx-theme-export-drawer',
  uses: [Shoelace.SlTab, Shoelace.SlTabGroup, Shoelace.SlTabPanel],
  props: class {
    open = true
  }
})((p) => {
  useStyles(`
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
  `)

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

// === showcases =====================================================

const AlertShowcase = define({
  name: 'sx-alerts-showcase',
  uses: [Shoelace.SlAlert, Shoelace.SlIcon]
})(() => {
  return () => (
    <Showcase title="Alerts">
      <sl-alert type="primary" open>
        <sl-icon slot="icon" name="info-circle"></sl-icon>
        <strong>This is super informative</strong>
        <br />
        You can tell by how pretty the alert is.
      </sl-alert>
      <br />
      <sl-alert type="success" open>
        <sl-icon slot="icon" name="check2-circle"></sl-icon>
        <strong>Your changes have been saved</strong>
        <br />
        You can safely exit the app now.
      </sl-alert>
      <br />
      <sl-alert type="info" open>
        <sl-icon slot="icon" name="gear"></sl-icon>
        <strong>Your settings have been updated</strong>
        <br />
        Some settings will take affect the next time you log in.
      </sl-alert>
      <br />
      <sl-alert type="warning" open>
        <sl-icon slot="icon" name="exclamation-triangle"></sl-icon>
        <strong>This will end your session</strong>
        <br />
        You will be logged out until you log in again.
      </sl-alert>
      <br />
      <sl-alert type="danger" open>
        <sl-icon slot="icon" name="exclamation-octagon"></sl-icon>
        <strong>Delete this file?</strong>
        <br />
        This is permanent, which means forever!
      </sl-alert>
    </Showcase>
  )
})

const AvatarShowcase = define({
  name: 'sx-avatar-showcase',
  uses: [Shoelace.SlAvatar]
})(() => {
  return () => (
    <Showcase title="Avatar">
      <HLayout>
        <sl-avatar shape="square"></sl-avatar>
        <sl-avatar shape="rounded"></sl-avatar>
        <sl-avatar shape="circle"></sl-avatar>
      </HLayout>
    </Showcase>
  )
})

const BadgeShowcase = define({
  name: 'sx-badge-showcase',
  uses: [Shoelace.SlBadge]
})(() => {
  return () => (
    <Showcase title="Badge">
      <HLayout>
        <sl-badge type="primary">Primary</sl-badge>
        <sl-badge type="success">Success</sl-badge>
        <sl-badge type="info">Info</sl-badge>
        <sl-badge type="warning">Warning</sl-badge>
        <sl-badge type="danger">Danger</sl-badge>
      </HLayout>
    </Showcase>
  )
})

const ButtonShowcase = define({
  name: 'sx-button-showcase',
  uses: [Shoelace.SlButton]
})(() => {
  return () => (
    <Showcase title="Button">
      <HLayout>
        <sl-button type="default">Default</sl-button>
        <sl-button type="primary">Primary</sl-button>
        <sl-button type="success">Success</sl-button>
        <sl-button type="info">Info</sl-button>
        <sl-button type="warning">Warning</sl-button>
        <sl-button type="danger">Danger</sl-button>
      </HLayout>
    </Showcase>
  )
})

const IconShowcase = define({
  name: 'sx-icon-showcase',
  uses: [Shoelace.SlIcon]
})(() => {
  return () => (
    <Showcase title="Icon">
      <HLayout style="font-size: 32px">
        <sl-icon name="exclamation-triangle"></sl-icon>
        <sl-icon name="archive"></sl-icon>
        <sl-icon name="battery-charging"></sl-icon>
        <sl-icon name="bell"></sl-icon>
        <sl-icon name="clock"></sl-icon>
        <sl-icon name="download"></sl-icon>
        <sl-icon name="file-earmark"></sl-icon>
        <sl-icon name="flag"></sl-icon>
        <sl-icon name="heart"></sl-icon>
        <sl-icon name="image"></sl-icon>
        <sl-icon name="lightning"></sl-icon>
        <sl-icon name="mic"></sl-icon>
        <sl-icon name="search"></sl-icon>
        <sl-icon name="star"></sl-icon>
        <sl-icon name="trash"></sl-icon>
        <sl-icon name="x-circle"></sl-icon>
      </HLayout>
    </Showcase>
  )
})
