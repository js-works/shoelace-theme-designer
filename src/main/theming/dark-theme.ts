import { lightTheme } from './light-theme'
import { createTheme, invertTheme } from './theme-utils'

// === exports =======================================================

export { darkTheme }

// === theme =========================================================

const darkTheme = createTheme(
  {
    'color-black': '#ffff',
    'color-white': '#1c1c1c',
    'color-gray-50': '#191A1D',
    'color-gray-100': '#202226',
    'color-gray-200': '#31343B',
    'color-gray-300': '#4E535D',
    'color-gray-400': '#646A77',
    'color-gray-500': '#8a909d',
    'color-gray-600': '#CCCED4',
    'color-gray-700': '#FFFFFF',
    'color-gray-800': '#FFFFFF',
    'color-gray-900': '#FFFFFF',
    'color-gray-950': '#FFFFFF',
    'color-info-50': '#1B1C1F',
    'color-info-100': '#232429',
    'color-info-200': '#35383F',
    'color-info-300': '#545963',
    'color-info-400': '#6B717F',
    'color-info-500': '#969ba6',
    'color-info-600': '#DCDEE1',
    'color-info-700': '#FFFFFF',
    'color-info-800': '#FFFFFF',
    'color-info-900': '#FFFFFF',
    'color-info-950': '#FFFFFF'
  },
  invertTheme(lightTheme)
)
