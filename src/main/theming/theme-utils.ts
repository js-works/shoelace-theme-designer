import { Customizing, Theme } from './types'
import Color from 'color'

// === exports =======================================================

export {
  contrast,
  createCustomizedTheme,
  createTheme,
  enhanceAccessibility,
  fromThemeToCss,
  fromThemeToJson,
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

// === utils =========================================================

function createTheme(tokens: Partial<Theme>, baseTheme: Theme): Theme {
  return Object.freeze({ ...baseTheme, ...tokens })
}

function fromThemeToCss(theme: Theme): string {
  const lines = []

  for (const key of Object.keys(theme)) {
    lines.push(`  --sl-${key}: ${getProp(theme, key)};`)
  }

  return lines.join('\n')
}

function fromThemeToJson(theme: Theme): string {
  const obj: any = {}

  Object.entries(theme).forEach(([key, value]) => {
    obj['--sl-' + key] = value
  })

  return JSON.stringify(obj, null, 2)
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
    lines.push(`  --sl-${key}: ${getProp(theme, key)};`)
  }

  lines.push('}')
  styleElem.textContent = lines.join('\n')
}

function invertTheme(theme: Theme): Theme {
  const newTokens: any = {}

  for (const color of SEMANTIC_COLORS_PLUS_GRAY) {
    for (const shade of COLOR_SHADES) {
      const shade2 = 1000 - shade
      const key1 = `color-${color}-${shade}`
      const key2 = `color-${color}-${shade2}`

      newTokens[key1] = getProp(theme, key2)
    }
  }

  newTokens['color-white'] = theme['color-black']
  newTokens['color-black'] = theme['color-white']

  return createTheme(newTokens, theme)
}

function luminance(color: Color) {
  const r = color.red()
  const g = color.green()
  const b = color.blue()

  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })

  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722
}

function contrast(color1: Color, color2: Color) {
  var lum1 = luminance(color1)
  var lum2 = luminance(color2)

  var brightest = Math.max(lum1, lum2)
  var darkest = Math.min(lum1, lum2)
  return (brightest + 0.05) / (darkest + 0.05)
}

function createCustomizedTheme(
  customizing: Customizing,
  baseTheme: Theme
): Theme {
  const isDark = Color(customizing.colorBack).isDark()

  const newTokens: Partial<Theme> = {
    'color-primary-500': customizing.colorPrimary,
    'color-success-500': customizing.colorSuccess,
    'color-info-500': customizing.colorInfo,
    'color-warning-500': customizing.colorWarning,
    'color-danger-500': customizing.colorDanger,
    'color-black': customizing.colorFront,
    'color-white': customizing.colorBack
  }

  for (const color of SEMANTIC_COLORS) {
    const key500 = `color-${color}-500`
    const value500 = getProp(newTokens, key500)
    const color500 = Color(value500)

    if (value500 !== getProp(baseTheme, key500)) {
      for (const shade of COLOR_SHADES) {
        const colorKey = `color-${color}-${shade}`

        if (shade !== 500) {
          const lightness1 = Color(getProp(baseTheme, key500)).lightness()
          const lightness2 = Color(getProp(baseTheme, colorKey)).lightness()
          const newColor = color500.lightness(lightness2)
          setProp(newTokens, colorKey, newColor!)
        }
      }
    }
  }

  let customizedTheme = createTheme(newTokens, baseTheme)

  if (customizing.inverted) {
    customizedTheme = invertTheme(customizedTheme)
  }

  return customizedTheme
}

function enhanceAccessibility(theme: Theme): Theme {
  const newTokens: any = {}

  for (const color of SEMANTIC_COLORS) {
    const color500 = Color(getProp(theme, `color-${color}-500`))
    const colorBlack = Color(getProp(theme, 'color-black'))
    const colorWhite = Color(getProp(theme, 'color-white'))

    const contrast1 = contrast(color500, colorBlack)
    const contrast2 = contrast(color500, colorWhite)

    setProp(
      newTokens,
      `color-${color}-text`,
      contrast1 >= contrast2 ? 'var(--sl-color-black)' : 'var(--sl-color-white)'
    )
  }

  return createTheme(newTokens, theme)
}

// === helpers =======================================================

function getProp(obj: object, name: string): any {
  return (obj as any)[name]
}

function setProp(obj: object, name: string, value: any) {
  ;(obj as any)[name] = value
}
