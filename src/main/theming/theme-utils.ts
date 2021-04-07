import { Theme } from './types'

// === exports =======================================================

export {
  createTheme,
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
    lines.push(`  --sl-${key}: ${(theme as any)[key]};`)
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
    lines.push(`  --sl-${key}: ${(theme as any)[key]};`)
  }

  lines.push('}')
  styleElem.textContent = lines.join('\n')
}

function invertTheme(theme: Theme): Theme {
  const newTokens: any = { ...theme }

  for (const color of SEMANTIC_COLORS_PLUS_GRAY) {
    for (const shade of COLOR_SHADES) {
      const shade2 = 1000 - shade
      const key1 = `color-${color}-${shade}`
      const key2 = `color-${color}-${shade2}`

      ;(newTokens as any)[key1] = (theme as any)[key2]
    }
  }

  newTokens['color-white'] = theme['color-black']
  newTokens['color-black'] = theme['color-white']

  return (createTheme as any)(newTokens) // TODO
}
