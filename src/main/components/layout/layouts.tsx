import { h } from 'js-element'
import { useDefaults, useStyles } from 'js-element/hooks'
import vLayoutStyles from './css/v-layout.css'
import hLayoutStyles from './css/h-layout.css'
import appLayoutStyles from './css/app-layout.css'

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
  wrap?: boolean
}) {
  const p = useDefaults(props, {
    align: 'center',
    gap: 'tiny',
    wrap: false
  })

  useStyles(hLayoutStyles)

  return () => {
    const alignItems =
      p.align === 'top'
        ? 'flex-start'
        : p.align === 'bottom'
        ? 'flex-end'
        : 'center'

    const flexWrap = p.wrap ? 'wrap' : 'nowrap'

    return (
      <div
        style={`gap: ${
          gaps[p.gap]
        }; align-items: ${alignItems}; flex-wrap: ${flexWrap};`}
      >
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

  useStyles(vLayoutStyles)

  return () => (
    <div style={`gap: ${gaps[p.gap]}`}>
      <slot />
    </div>
  )
}

function AppLayout() {
  useStyles(appLayoutStyles)

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
