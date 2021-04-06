import { defaultTheme } from './default-theme'
import { Theme } from './types'

// === exports =======================================================

export { createTheme, fromThemeToCss, invertTheme, loadTheme }

// === utils =========================================================

function createTheme(tokens: Partial<Theme>, baseTheme = defaultTheme) {
  return Object.freeze({ ...baseTheme, ...tokens })
}

function invertTheme(theme: Theme) {
  const ret: Theme = { ...theme }

  const newBlack = theme['color-white']
  const newWhite = theme['color-black']

  ret['color-black'] = newBlack
  ret['color-white'] = newWhite

  for (const color of ['primary', 'info', 'success', 'warning', 'danger']) {
    for (const shade of [
      50,
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      950
    ]) {
      const shade2 = 1000 - shade
      const key1 = `color-${color}-${shade}`
      const key2 = `color-${color}-${shade2}`
      console.log(key1, key2)
      ;(ret as any)[key1] = (theme as any)[key2]
    }
  }

  return ret
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
