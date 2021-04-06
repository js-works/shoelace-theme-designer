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
  slots: ['header', 'sidebar', 'main'],
  styles: () => styles.appLayout
})(() => {
  return () => (
    <div class="base">
      <header class="header">
        <slot name="header" />
      </header>
      <aside class="sidebar">
        <slot name="sidebar" />
      </aside>
      <main class="main">
        <slot name="main" />
      </main>
    </div>
  )
})

// === styles ========================================================

const styles = {
  appLayout: `
    .base {
      display: grid;
      grid-template-rows: auto 1fr;
      grid-template-columns: auto 1fr;
      position: absolute;
      height: 100%;
      width: 100%;
    }

    .header {
      grid-column: 1/-1;
      box-shadow: rgba(149, 157, 165, 0.05) 0px 8px 24px;
      z-index: 10000;
    }

    .sidebar {
      overflow: auto; 
    }

    .main {
      overflow: auto;
    }
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
