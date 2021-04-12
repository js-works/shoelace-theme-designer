import { Theme } from './types'
import { lightTheme } from './light-theme'
import { lightHigherContrastTheme } from './light-higher-contrast-theme'
import { darkTheme } from './dark-theme'
import { darkHigherContrastTheme } from './dark-higher-contrast-theme'
import { experimentalTheme } from './experimental-theme'
import { experimentalDarkTheme } from './experimental-dark-theme'

export { getBaseThemeById, getBaseThemeNameById, getAllBaseThemeIds }

// === constants =====================================================

const baseThemes = {
  light: {
    theme: lightTheme,
    name: 'Light'
  },

  lightHighContrast: {
    theme: lightHigherContrastTheme,
    name: 'Light (level AA)'
  },

  dark: {
    theme: darkTheme,
    name: 'Dark'
  },

  darkHigherContrast: {
    theme: darkHigherContrastTheme,
    name: 'Dark (level AA)'
  },

  experimental: {
    theme: experimentalTheme,
    name: 'Experimental'
  },

  experimentalDark: {
    theme: experimentalDarkTheme,
    name: 'Experimental dark'
  }
}

// === functions =====================================================

function getAllBaseThemeIds(): string[] {
  return Object.keys(baseThemes)
}

function getBaseThemeById(id: string): Theme {
  const ret = (baseThemes as any)[id].theme

  if (!ret) {
    throw Error(`[getBaseThemeById] Unknown base theme`)
  }

  return ret
}

function getBaseThemeNameById(id: string): string {
  const ret = (baseThemes as any)[id]?.name

  if (!ret) {
    throw Error(`[getBaseThemeNameById] Unknown base theme id "${id}"`)
  }

  return ret
}
