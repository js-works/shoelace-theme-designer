import { defaultTheme } from './default-theme'
import { Theme } from './types'

// === exports =======================================================

export { createTheme, fromThemeToCss, loadTheme, COLOR_SHADES, SEMANTIC_COLORS }

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

function createTheme(tokens: Partial<Theme>, baseTheme = defaultTheme) {
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
