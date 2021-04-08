import { lightTheme } from './light-theme'
import { enhanceAccessibility } from './theme-utils'

// === exports =======================================================

export { lightHigherContrastTheme }

// ===  theme ========================================================

const lightHigherContrastTheme = enhanceAccessibility(lightTheme)
