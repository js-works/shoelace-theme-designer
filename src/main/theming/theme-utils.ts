import { Customizing, Theme } from './types'
import Color from 'color'
import { getProp, setProp } from '../lib/utils'

// === exports =======================================================

export {
  getContrast,
  createCustomizedTheme,
  createTheme,
  enhanceAccessibility,
  fromThemeToCss,
  fromThemeToJson,
  getColor,
  invertTheme,
  loadTheme,
  serializeCustomization,
  unserializeCustomization,
  COLOR_SHADES,
  SEMANTIC_COLORS
}

// === constants =====================================================

const COLOR_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

const SEMANTIC_COLORS = [
  'primary',
  'info',
  'success',
  'warning',
  'danger',
  'gray'
]

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

  for (const color of SEMANTIC_COLORS) {
    for (const shade of COLOR_SHADES) {
      const shade2 = 1000 - shade
      const key1 = `color-${color}-${shade}`
      const key2 = `color-${color}-${shade2}`

      newTokens[key1] = getProp(theme, key2)
    }
  }

  //newTokens['color-white'] = theme['color-black']
  //newTokens['color-black'] = theme['color-white']

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

function getContrast(color1: Color, color2: Color) {
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
  const newTokens: Partial<Theme> = {
    'color-primary-500': customizing.colorPrimary,
    'color-success-500': customizing.colorSuccess,
    'color-info-500': customizing.colorInfo,
    'color-warning-500': customizing.colorWarning,
    'color-danger-500': customizing.colorDanger,
    'color-gray-500': customizing.colorGray,
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
          const lightness500 = color500.lightness()
          const lightnessBase500 = Color(getProp(baseTheme, key500)).lightness()
          const lightness = Color(getProp(baseTheme, colorKey)).lightness()
          const factor = (lightness500 - lightnessBase500) / lightnessBase500
          const newColor = color500.lightness(lightness).lighten(factor)

          setProp(newTokens, colorKey, newColor.hex())
        }

        /*
        // Semantically different calculation

        if (shade !== 500) {
          const factor = (500 - shade) / 500
          const newColor = color500.lighten(factor)

          setProp(newTokens, colorKey, newColor)
        }
        */
      }
    }
  }

  for (const color of SEMANTIC_COLORS) {
    const key = `text${color[0].toUpperCase() + color.substr(1)}`
    const value = getProp(customizing, key)
    const themeKey = `color-${color}-text`

    if (value === 'back') {
      setProp(
        newTokens,
        themeKey,
        true || !customizing.inverted // TODO
          ? 'var(--sl-color-white)'
          : 'var(--sl-color-black)'
      )
    } else if (value === 'front') {
      setProp(
        newTokens,
        themeKey,
        true || !customizing.inverted // TODO
          ? 'var(--sl-color-black)'
          : 'var(--sl-color-white)'
      )
    }
  }

  let customizedTheme = createTheme(newTokens, baseTheme)

  if (customizing.inverted) {
    customizedTheme = invertTheme(customizedTheme)
  }

  if (Object.keys(customizing.overrides).length > 0) {
    customizedTheme = createTheme(
      { ...customizedTheme, ...customizing.overrides },
      baseTheme
    )
  }

  return customizedTheme
}

function enhanceAccessibility(theme: Theme): Theme {
  const newTokens: any = {}

  for (const color of SEMANTIC_COLORS) {
    const color500 = Color(getProp(theme, `color-${color}-500`))
    const colorBlack = Color(getProp(theme, 'color-black'))
    const colorWhite = Color(getProp(theme, 'color-white'))

    const contrast1 = getContrast(color500, colorBlack)
    const contrast2 = getContrast(color500, colorWhite)

    setProp(
      newTokens,
      `color-${color}-text`,
      contrast1 >= contrast2 ? 'var(--sl-color-black)' : 'var(--sl-color-white)'
    )
  }

  return createTheme(newTokens, theme)
}

function getColor(colorName: string, theme: Theme): Color {
  let value = getProp(theme, colorName)

  // TODO - this is not very nice
  if (value === 'var(--sl-color-black)') {
    value = getProp(theme, 'color-black')
  } else if (value === 'var(--sl-color-white)') {
    value = getProp(theme, 'color-white')
  }

  return Color(value)
}

// === helpers =======================================================

function serializeCustomization(data: {
  baseThemeId: string
  customizing: Customizing
}) {
  return btoa(JSON.stringify(data))
}

function unserializeCustomization(
  base64String: string
): {
  baseThemeId: string
  customizing: Customizing
} | null {
  console.log(base64String)
  try {
    return JSON.parse(atob(base64String))
  } catch {
    return null
  }
}
