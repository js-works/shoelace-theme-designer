import { define, h } from 'js-element'
import { useStyles } from 'js-element/hooks'

// === exports =======================================================

export { HLayout, VLayout }

// === components ====================================================

const HLayout = define({
  name: 'sx-horizontal-layout',
  slots: ['default']
})(() => {
  useStyles(styles.hlayout)

  return () => (
    <div>
      <slot />
    </div>
  )
})

const VLayout = define({
  name: 'sx-vertical-layout',
  slots: ['default']
})(() => {
  useStyles(styles.vlayout)

  return () => (
    <div>
      <slot />
    </div>
  )
})

// === styles ========================================================

const styles = {
  hlayout: `
    div {
      display: flex;
      gap: 6px;
      font-size: var(--sl-font-size-medium);
      font-family: var(--sl-font-sans);
    }
  `,

  vlayout: `
    div {
      display: flex;
      flex-direction: column;
      gap: 6px;
      font-size: var(--sl-font-size-medium);
      font-family: var(--sl-font-sans);
    }
  `
}
