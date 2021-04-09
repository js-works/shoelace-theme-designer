import { lightTheme } from './light-theme'
import { createTheme, invertTheme } from './theme-utils'

// === exports =======================================================

export { experimentalTheme }

// === theme =========================================================

const experimentalTheme = createTheme(
  {
    'border-radius-small': '0',
    'border-radius-medium': '0',
    'border-radius-large': '0',
    'border-radius-x-large': '0',

    'input-border-radius-small': '0',
    'input-border-radius-medium': '0',
    'input-border-radius-large': '0'
  },
  lightTheme
)
