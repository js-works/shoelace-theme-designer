import { define, h } from 'js-element'

// === exports =======================================================

export { AppLayout, HLayout, VLayout }

// === constants =====================================================

const gaps = {
  tiny: '4px',
  small: '8px',
  medium: '20px',
  large: '40px',
  huge: '60px'
}

// === components ====================================================

const HLayout = define({
  name: 'sx-horizontal-layout',
  slots: ['default'],
  styles: () => styles.hLayout,

  props: class {
    align = 'center' as 'top' | 'center' | 'bottom'
    gap = 'tiny' as 'tiny' | 'small' | 'medium' | 'large' | 'huge'
  }
})((p) => {
  return () => {
    const alignItems =
      p.align === 'top'
        ? 'flex-start'
        : p.align === 'bottom'
        ? 'flex-end'
        : 'center'

    return (
      <div style={`gap: ${gaps[p.gap]}; align-items: ${alignItems};`}>
        <slot />
      </div>
    )
  }
})

const VLayout = define({
  name: 'sx-vertical-layout',
  slots: ['default'],
  styles: () => styles.vLayout,

  props: class {
    gap = 'tiny' as 'tiny' | 'small' | 'medium' | 'large' | 'huge'
  }
})((p) => {
  return () => (
    <div style={`gap: ${gaps[p.gap]}`}>
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
      z-index: 100;
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
      display: inline-flex;
      align-items: center;
      font-size: var(--sl-font-size-medium);
      font-family: var(--sl-font-sans);
    }
  `,

  vLayout: `
    div {
      display: inline-flex;
      flex-direction: column;
      font-size: var(--sl-font-size-medium);
      font-family: var(--sl-font-sans);
    }
  `
}
