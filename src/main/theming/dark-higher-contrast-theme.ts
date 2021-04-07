import { lightTheme } from './light-theme'
import { createTheme, invertTheme } from './theme-utils'

// === exports =======================================================

export { darkHigherContrastTheme }

// === theme =========================================================

const darkHigherContrastTheme = createTheme(
  {
    'color-white': '#020202'
  },
  invertTheme(lightTheme)
)
