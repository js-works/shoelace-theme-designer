import { define, h } from 'js-element'

// === exports =======================================================

export { H2, H3, H4, Text }

// === components ====================================================

const H2 = define({
  name: 'sx-headline2',
  slots: ['default'],

  styles: `
    h2 {
      font-family: var(--sl-font-sans);
      font-size: var(--sl-font-size-xx-large);
      margin: 0 0 10px 0;
    }
  `
})(() => {
  return () => (
    <h2>
      <slot />
    </h2>
  )
})

const H3 = define({
  name: 'sx-headline3',
  slots: ['default'],

  styles: `
    h3 {
      font-weight: var(--sl-font-weight-normal);
      font-family: var(--sl-font-sans);
      font-size: var(--sl-font-size-x-large);
    }
  `
})(() => {
  return () => (
    <h3>
      <slot />
    </h3>
  )
})

const H4 = define({
  name: 'sx-headline4',
  slots: ['default'],

  styles: `
    h4 {
      font-weight: var(--sl-font-weight-normal);
      font-family: var(--sl-font-sans);
      font-size: var(--sl-font-size-large);
      margin-bottom: 1.15em;
    }
  `
})(() => {
  return () => (
    <h4>
      <slot />
    </h4>
  )
})

const Text = define({
  name: 'sx-text',
  slots: ['default'],

  styles: `
    div {
      font-weight: var(--sl-font-weight-normal);
      font-family: var(--sl-font-sans);
      font-size: var(--sl-font-size-medium);
    }
  `
})(() => {
  return () => (
    <div>
      <slot />
    </div>
  )
})
