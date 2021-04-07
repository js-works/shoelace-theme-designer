import { lightTheme } from './light-theme'
import { lightHigherContrastTheme } from './light-higher-contrast-theme'
import { darkTheme } from './dark-theme'
import { darkHigherContrastTheme } from './dark-higher-contrast-theme'
import { Theme } from './types'

// === exports =======================================================

export {
  createTheme,
  fromThemeToCss,
  getBaseThemeById,
  getBaseThemeId,
  getBaseThemeNameById,
  getAllBaseThemeIds,
  invertTheme,
  loadTheme,
  COLOR_SHADES,
  SEMANTIC_COLORS,
  SEMANTIC_COLORS_PLUS_GRAY
}

// === constants =====================================================

const COLOR_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
const SEMANTIC_COLORS = ['primary', 'info', 'success', 'warning', 'danger']
const SEMANTIC_COLORS_PLUS_GRAY = [...SEMANTIC_COLORS, 'gray']

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
  }
}

// === utils =========================================================

function createTheme(tokens: Partial<Theme>, baseTheme: Theme) {
  return Object.freeze({ ...baseTheme, ...tokens })
}

function fromThemeToCss(theme: Theme): string {
  const lines = []

  for (const key of Object.keys(theme)) {
    lines.push(`  --sl-${key}: ${(theme as any)[key]};`)
  }

  return lines.join('\n')
}

function loadTheme(name: string, theme: Theme) {
  let styleElem = document.querySelector(`head > style[data-theme='${name}']`)

  if (!styleElem) {
    styleElem = document.createElement('style')
    styleElem.setAttribute('data-theme', name)
    document.head.appendChild(styleElem)
  }

  const lines = [`.sl-theme-${name} {`]

  for (const key of Object.keys(theme)) {
    lines.push(`  --sl-${key}: ${(theme as any)[key]};`)
  }

  lines.push('}')
  styleElem.textContent = lines.join('\n')
}

function invertTheme(theme: Theme): Theme {
  return { ...theme }
  const newTheme: Theme = { ...theme }

  for (const color of SEMANTIC_COLORS_PLUS_GRAY) {
    for (const shade of COLOR_SHADES) {
      const shade2 = 1000 - shade
      const key1 = `color-${color}-${shade}`
      const key2 = `color-${color}-${shade2}`

      ;(newTheme as any)[key1] = (theme as any)[key2]
    }
  }

  newTheme['color-white'] = theme['color-black']
  newTheme['color-black'] = theme['color-white']

  return newTheme
}

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

function getBaseThemeId(theme: Theme): string {
  for (const [key, value] of Object.entries(baseThemes)) {
    if (value.theme === theme) {
      return key
    }
  }

  throw Error(`[getBaseThemeId] Unknown base theme`)
}

function getBaseThemeNameById(id: string): string {
  const ret = (baseThemes as any)[id]?.name

  if (!ret) {
    throw Error(`[getBaseThemeNameById] Unknown base theme id`)
  }

  return ret
}
