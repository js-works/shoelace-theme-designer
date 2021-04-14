import { makeObservable, action, computed, observable } from 'mobx'
import { Customizing } from '../theming/types'

import {
  createCustomizedTheme,
  fromThemeToCss,
  fromThemeToJson,
  SEMANTIC_COLORS,
  serializeCustomization
} from '../theming/theme-utils'

import { getBaseThemeById } from '../theming/base-themes'

// === export ========================================================

export { Store }

// === app store =====================================================

const defaultTheme = getBaseThemeById('light')

class Store {
  baseThemeId = 'light'
  shareThemeMessageVisible = false
  exportDrawerVisible = false

  customizing: Customizing = {
    colorPrimary: defaultTheme['color-primary-500'],
    colorSuccess: defaultTheme['color-success-500'],
    colorInfo: defaultTheme['color-info-500'],
    colorWarning: defaultTheme['color-warning-500'],
    colorDanger: defaultTheme['color-danger-500'],
    colorGray: defaultTheme['color-gray-500'],
    colorFront: defaultTheme['color-black'],
    colorBack: defaultTheme['color-white'],

    textPrimary: 'default',
    textInfo: 'default',
    textSuccess: 'default',
    textWarning: 'default',
    textDanger: 'default',

    inverted: false,

    overrides: {}
  }

  get baseTheme() {
    return getBaseThemeById(this.baseThemeId)
  }

  get customizedTheme() {
    return createCustomizedTheme(this.customizing, this.baseTheme)
  }

  get customizedCss() {
    return fromThemeToCss(this.customizedTheme)
  }

  get customizedJson() {
    return fromThemeToJson(this.customizedTheme)
  }

  get themeModified() {
    const baseTheme = this.baseTheme
    const customizedTheme = this.customizedTheme

    for (const color of SEMANTIC_COLORS) {
      if (
        color !== 'gray' &&
        (this.customizing as any)[
          'text' + color[0].toUpperCase() + color.substr(1)
        ] !== 'default'
      ) {
        return true
      }
    }

    for (const key of Object.keys(customizedTheme)) {
      if ((customizedTheme as any)[key] !== (baseTheme as any)[key]) {
        return true
      }
    }

    return false
  }

  constructor() {
    makeObservable(this, {
      baseThemeId: observable,
      baseTheme: computed,
      customizedCss: computed,
      customizedJson: computed,
      customizedTheme: computed,
      customize: action,
      customizing: observable.ref,
      exportDrawerVisible: observable,
      invertTheme: action,
      resetTheme: action,
      setBaseThemeId: action,
      setExportDrawerVisible: action,
      setShareThemeMessageVisible: action,
      shareThemeMessageVisible: observable,
      themeModified: computed
    })
  }

  setBaseThemeId(id: string) {
    this.baseThemeId = id
  }

  setShareThemeMessageVisible(value: boolean) {
    this.shareThemeMessageVisible = value
  }

  setExportDrawerVisible(value: boolean) {
    this.exportDrawerVisible = value
  }

  customize(values: Partial<Customizing>) {
    this.customizing = Object.assign({}, this.customizing, values)
  }

  invertTheme() {
    const colorFront = this.customizing.colorFront
    const colorBack = this.customizing.colorBack

    this.customizing = {
      ...this.customizing,
      colorFront: colorBack,
      colorBack: colorFront,
      inverted: !this.customizing.inverted
    }
  }

  resetTheme() {
    const baseTheme = this.baseTheme

    this.customizing = {
      colorPrimary: baseTheme['color-primary-500'],
      colorSuccess: baseTheme['color-success-500'],
      colorInfo: baseTheme['color-info-500'],
      colorWarning: baseTheme['color-warning-500'],
      colorDanger: baseTheme['color-danger-500'],
      colorGray: baseTheme['color-gray-500'],
      colorFront: baseTheme['color-black'],
      colorBack: baseTheme['color-white'],

      textPrimary: 'default',
      textInfo: 'default',
      textSuccess: 'default',
      textWarning: 'default',
      textDanger: 'default',

      inverted: false,

      overrides: {}
    }
  }

  copyToClipboard() {
    const base64String = serializeCustomization({
      baseThemeId: this.baseThemeId,
      customizing: this.customizing
    })

    const url = `${location.href.split('#')[0]}#${base64String}`
    navigator.clipboard.writeText(url)
  }
}
