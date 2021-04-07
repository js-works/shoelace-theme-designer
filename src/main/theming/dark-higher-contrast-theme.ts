import { lightTheme } from './light-theme'
import { invertTheme } from './theme-utils'

// === exports =======================================================

export { darkHigherContrastTheme }

// === default theme =================================================

const darkHigherContrastTheme = invertTheme(lightTheme)

darkHigherContrastTheme['color-white'] = '#020202'
