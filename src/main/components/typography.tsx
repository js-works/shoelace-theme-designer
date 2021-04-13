import { h } from 'js-element'
import { useDefaults, useStyles } from 'js-element/hooks'

// === exports =======================================================

export { H2, H3, H4, Text }

// === components ====================================================

function H2() {
  useStyles(styles.h2)

  return () => (
    <h2>
      <slot />
    </h2>
  )
}

function H3() {
  useStyles(styles.h3)

  return () => (
    <h3>
      <slot />
    </h3>
  )
}

function H4() {
  useStyles(styles.h4)

  return () => (
    <h4>
      <slot />
    </h4>
  )
}

function Text(props: {
  size?: 'small' | 'medium' | 'large'
  weight?: 'normal' | 'bold'
}) {
  const p = useDefaults(props, {
    size: 'medium',
    weight: 'normal'
  })

  useStyles(styles.text)

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
}

// === styles ========================================================

const styles = {
  h2: `
    h2 {
      font-size: var(--sl-font-size-xx-large);
      margin: 0 0 10px 0;
    }
  `,

  h3: `
    h3 {
      font-weight: var(--sl-font-weight-normal);
      font-size: var(--sl-font-size-x-large);
    }
  `,

  h4: `
    h4 {
      font-weight: var(--sl-font-weight-normal);
      font-size: var(--sl-font-size-large);
      margin-bottom: 1.15em;
    }
  `,

  text: `
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
}
