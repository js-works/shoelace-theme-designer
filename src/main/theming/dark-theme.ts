import { lightTheme } from './light-theme'
import { createTheme, invertTheme } from './theme-utils'

// === exports =======================================================

export { darkTheme }

// === theme =========================================================

const darkTheme = createTheme(
  {
    'color-black': '#ffff',
    'color-white': '#1c1c1c'
  },
  invertTheme(lightTheme)
)
