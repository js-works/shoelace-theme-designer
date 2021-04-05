import { define, h } from 'js-element'

// === exports =======================================================

export { AppLayout, HLayout, VLayout }

// === components ====================================================

const HLayout = define({
  name: 'sx-horizontal-layout',
  slots: ['default'],
  styles: () => styles.hLayout
})(() => {
  return () => (
    <div>
      <slot />
    </div>
  )
})

const VLayout = define({
  name: 'sx-vertical-layout',
  slots: ['default'],
  styles: () => styles.vLayout
})(() => {
  return () => (
    <div>
      <slot />
    </div>
  )
})

const AppLayout = define({
  name: 'sx-app-layout',
  slots: ['top', 'sidebar', 'main']
})(() => {
  return () => (
    <div>
      <div>header</div>
      <div>
        <div>sidebar</div>
        <div>main</div>
      </div>
    </div>
  )
})

// === styles ========================================================

const styles = {
  appLayout: `
  `,

  hLayout: `
    div {
      display: flex;
      gap: 6px;
      font-size: var(--sl-font-size-medium);
      font-family: var(--sl-font-sans);
    }
  `,

  vLayout: `
    div {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: var(--sl-font-size-medium);
      font-family: var(--sl-font-sans);
    }
  `
}
