import { darkTheme } from './dark-theme'
import { createTheme, enhanceAccessibility } from './theme-utils'

// === exports =======================================================

export { darkHigherContrastTheme }

// ===  theme ========================================================

const darkHigherContrastTheme = enhanceAccessibility(
  createTheme(
    {
      ...darkTheme,
      'color-white': '#101010'
    },
    darkTheme
  )
)
