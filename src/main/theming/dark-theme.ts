import { lightTheme } from './light-theme'
import { createTheme, invertTheme } from './theme-utils'

// === exports =======================================================

export { darkTheme }

// === theme =========================================================

const darkTheme = createTheme(
  {
    'color-black': '#ffff',
    'color-white': '#575555'
  },
  invertTheme(lightTheme)
)
