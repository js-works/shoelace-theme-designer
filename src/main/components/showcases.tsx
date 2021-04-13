import { createRef, h } from 'js-element'
import { useStyles } from 'js-element/hooks'
import { HLayout, VLayout } from './layouts'
import * as Shoelace from '@shoelace-style/shoelace'
import { H3 } from '../components/typography'
import { COLOR_SHADES, SEMANTIC_COLORS } from '../theming/theme-utils'

// === exports =======================================================

export { Showcases }

// === used components ===============================================

void [Shoelace.SlButton, Shoelace.SlDrawer]

// === Showcases =====================================================

function Showcase(p: { title: string }) {
  useStyles(styles.showcase)

  return () => (
    <div class="base">
      <H3>{p.title}</H3>
      <slot />
    </div>
  )
}

function Showcases() {
  return () => (
    <div>
      <PaletteShowcase />
      <AlertShowcase />
      <AvatarShowcase />
      <BadgeShowcase />
      <ButtonShowcase />
      <IconShowcase />
    </div>
  )
}

// === showcases =====================================================

function PaletteShowcase() {
  const dialogRef = createRef<any>()

  useStyles(styles.paletteShowcase)

  return () => (
    <HLayout gap="huge" align="top">
      <Showcase title="Palette" class="showcase-palette">
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
      </Showcase>
      <Showcase title="Assorted components">
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
      </Showcase>
    </HLayout>
  )
}

function AlertShowcase() {
  return () => (
    <Showcase title="Alert">
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
}

function AvatarShowcase() {
  return () => (
    <Showcase title="Avatar">
      <HLayout>
        <sl-avatar shape="square"></sl-avatar>
        <sl-avatar shape="rounded"></sl-avatar>
        <sl-avatar shape="circle"></sl-avatar>
      </HLayout>
    </Showcase>
  )
}

function BadgeShowcase() {
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
}

function ButtonShowcase() {
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
}

function IconShowcase() {
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
}

// === styles ========================================================

const styles = {
  showcase: `
    .base {
      color: var(--sl-color-black);
      margin: 10px 0 65px 0; 
      font-size: var(--sl-font-size-medium);
    }
  `,

  paletteShowcase: `
    th {
      padding: 2px 4px 6px 8px;
      width: 3.5em;
      font-weight: var(--sl-font-weight-normal);
      font-size: var(--sl-font-size-small);
    }

    td {
      width: 3em;
      height: calc(1em + 7px);
      text-align: center;
      font-size: var(--sl-font-size-small);
    }
  `
}
