import { h } from 'js-element'
import { useDefaults, useStyles } from 'js-element/hooks'

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

function HLayout(props: {
  align?: 'top' | 'center' | 'bottom'
  gap?: 'tiny' | 'small' | 'medium' | 'large' | 'huge'
}) {
  const p = useDefaults(props, {
    align: 'center',
    gap: 'tiny'
  })

  useStyles(styles.hLayout)

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
}

function VLayout(props: {
  gap?: 'tiny' | 'small' | 'medium' | 'large' | 'huge'
}) {
  const p = useDefaults(props, {
    gap: 'tiny'
  })

  useStyles(styles.vLayout)

  return () => (
    <div style={`gap: ${gaps[p.gap]}`}>
      <slot />
    </div>
  )
}

function AppLayout() {
  useStyles(styles.appLayout)

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
}

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
    }
  `,

  vLayout: `
    div {
      display: inline-flex;
      flex-direction: column;
      font-size: var(--sl-font-size-medium);
    }
  `
}
