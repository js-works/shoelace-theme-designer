import { lightTheme } from './light-theme'
import { createTheme } from './theme-utils'

// === exports =======================================================

export { lightHigherContrastTheme }

// ===  theme ========================================================

const lightHigherContrastTheme = createTheme(
  {
    'color-white': '020202'
  },
  lightTheme
)
