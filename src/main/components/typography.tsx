import { define, h } from 'js-element'

// === exports =======================================================

export { H2, H3, H4, Text }

// === components ====================================================

const H2 = define({
  tag: 'sx-headline2',
  slots: ['default'],

  styles: `
    h2 {
      font-size: var(--sl-font-size-xx-large);
      margin: 0 0 10px 0;
    }
  `
}).bind(() => {
  return () => (
    <h2>
      <slot />
    </h2>
  )
})

const H3 = define({
  tag: 'sx-headline3',
  slots: ['default'],

  styles: `
    h3 {
      font-weight: var(--sl-font-weight-normal);
      font-size: var(--sl-font-size-x-large);
    }
  `
}).bind(() => {
  return () => (
    <h3>
      <slot />
    </h3>
  )
})

const H4 = define({
  tag: 'sx-headline4',
  slots: ['default'],

  styles: `
    h4 {
      font-weight: var(--sl-font-weight-normal);
      font-size: var(--sl-font-size-large);
      margin-bottom: 1.15em;
    }
  `
}).bind(() => {
  return () => (
    <h4>
      <slot />
    </h4>
  )
})

const Text = define({
  tag: 'sx-text',
  slots: ['default'],

  props: class {
    size = 'small' as 'small' | 'medium' | 'large'
    weight = 'normal' as 'normal' | 'bold'
  },

  styles: `
    .small {
      font-size: var(--sl-font-size-small);
    }
    
    .medium {
      font-size: var(--sl-font-size-medium);
    }
    
    .large {
      font-size: var(--sl-font-size-large);
    }

    .nomal {
      font-weight: var(--sl-font-weight-normal);
    }

    .bold {
      font-weight: var(--sl-font-weight-bold);
    }
  `
}).bind((p) => {
  return () => {
    const classes = []

    switch (p.size) {
      case 'small':
        classes.push('small')
        break

      case 'medium':
        classes.push('medium')
        break

      case 'large':
        classes.push('large')
        break
    }

    switch (p.weight) {
      case 'normal':
        classes.push('normal')
        break

      case 'bold':
        classes.push('bold')
        break
    }

    return (
      <div class={classes.join(' ')}>
        <slot />
      </div>
    )
  }
})
