import { define, h } from 'js-element'
import { useStyles } from 'js-element/hooks'

// === exports =======================================================

export { HLayout, VLayout }

// === components ====================================================

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
