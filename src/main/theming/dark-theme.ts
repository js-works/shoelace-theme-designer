import { lightTheme } from './light-theme'
import { invertTheme } from './theme-utils'

// === exports =======================================================

export { darkTheme }

// === default theme =================================================

const darkTheme = invertTheme(lightTheme)

darkTheme['color-white'] = '#575555'
