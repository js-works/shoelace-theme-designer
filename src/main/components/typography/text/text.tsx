import { ReactNode } from 'react'
import './text.css'

// === exports =======================================================

export { Text }

// === components ====================================================

type TextProps = {
  size?: 'small' | 'medium' | 'large'
  weight?: 'normal' | 'bold'
  children?: ReactNode
}

function Text({ size = 'medium', weight = 'normal', children }: TextProps) {
  const classes = ['text']

  switch (size) {
    case 'small':
      classes.push('text--size-small')
      break

    case 'medium':
      classes.push('text--size-medium')
      break

    case 'large':
      classes.push('text--size-large')
      break
  }

  switch (weight) {
    case 'normal':
      classes.push('text--weight-normal')
      break

    case 'bold':
      classes.push('text--weight-bold')
      break
  }

  return <div className={classes.join(' ')}>{children}</div>
}
