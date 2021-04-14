// === exports =======================================================

export { Customizing, Theme }

// === types =========================================================

type Customizing = {
  readonly colorPrimary: string
  readonly colorInfo: string
  readonly colorSuccess: string
  readonly colorWarning: string
  readonly colorDanger: string
  readonly colorGray: string
  readonly colorFront: string
  readonly colorBack: string

  readonly textPrimary: 'default' | 'back' | 'front'
  readonly textInfo: 'default' | 'back' | 'front'
  readonly textSuccess: 'default' | 'back' | 'front'
  readonly textWarning: 'default' | 'back' | 'front'
  readonly textDanger: 'default' | 'back' | 'front'

  readonly inverted: boolean

  readonly overrides: Readonly<Partial<Theme>>
}

type Theme = Readonly<{
  'color-black': string
  'color-white': string
  'color-gray-50': string
  'color-gray-100': string
  'color-gray-200': string
  'color-gray-300': string
  'color-gray-400': string
  'color-gray-500': string
  'color-gray-600': string
  'color-gray-700': string
  'color-gray-800': string
  'color-gray-900': string
  'color-gray-950': string
  'color-primary-50': string
  'color-primary-100': string
  'color-primary-200': string
  'color-primary-300': string
  'color-primary-400': string
  'color-primary-500': string
  'color-primary-600': string
  'color-primary-700': string
  'color-primary-800': string
  'color-primary-900': string
  'color-primary-950': string
  'color-primary-text': string
  'color-success-50': string
  'color-success-100': string
  'color-success-200': string
  'color-success-300': string
  'color-success-400': string
  'color-success-500': string
  'color-success-600': string
  'color-success-700': string
  'color-success-800': string
  'color-success-900': string
  'color-success-950': string
  'color-success-text': string
  'color-info-50': string
  'color-info-100': string
  'color-info-200': string
  'color-info-300': string
  'color-info-400': string
  'color-info-500': string
  'color-info-600': string
  'color-info-700': string
  'color-info-800': string
  'color-info-900': string
  'color-info-950': string
  'color-info-text': string
  'color-warning-50': string
  'color-warning-100': string
  'color-warning-200': string
  'color-warning-300': string
  'color-warning-400': string
  'color-warning-500': string
  'color-warning-600': string
  'color-warning-700': string
  'color-warning-800': string
  'color-warning-900': string
  'color-warning-950': string
  'color-warning-text': string
  'color-danger-50': string
  'color-danger-100': string
  'color-danger-200': string
  'color-danger-300': string
  'color-danger-400': string
  'color-danger-500': string
  'color-danger-600': string
  'color-danger-700': string
  'color-danger-800': string
  'color-danger-900': string
  'color-danger-950': string
  'color-danger-text': string
  'border-radius-small': string
  'border-radius-medium': string
  'border-radius-large': string
  'border-radius-x-large': string
  'border-radius-circle': string
  'border-radius-pill': string
  'shadow-x-small': string
  'shadow-small': string
  'shadow-medium': string
  'shadow-large': string
  'shadow-x-large': string
  'spacing-xxx-small': string
  'spacing-xx-small': string
  'spacing-x-small': string
  'spacing-small': string
  'spacing-medium': string
  'spacing-large': string
  'spacing-x-large': string
  'spacing-xx-large': string
  'spacing-xxx-large': string
  'spacing-xxxx-large': string
  'transition-x-slow': string
  'transition-slow': string
  'transition-medium': string
  'transition-fast': string
  'transition-x-fast': string
  'font-mono': string
  'font-sans': string
  'font-serif': string
  'font-size-xx-small': string
  'font-size-x-small': string
  'font-size-small': string
  'font-size-medium': string
  'font-size-large': string
  'font-size-x-large': string
  'font-size-xx-large': string
  'font-size-xxx-large': string
  'font-size-xxxx-large': string
  'font-weight-light': string
  'font-weight-normal': string
  'font-weight-semibold': string
  'font-weight-bold': string
  'letter-spacing-dense': string
  'letter-spacing-normal': string
  'letter-spacing-loose': string
  'line-height-dense': string
  'line-height-normal': string
  'line-height-loose': string
  'focus-ring-color-primary': string
  'focus-ring-color-success': string
  'focus-ring-color-info': string
  'focus-ring-color-warning': string
  'focus-ring-color-danger': string
  'focus-ring-width': string
  'button-font-size-small': string
  'button-font-size-medium': string
  'button-font-size-large': string
  'input-height-small': string
  'input-height-medium': string
  'input-height-large': string
  'input-background-color': string
  'input-background-color-hover': string
  'input-background-color-focus': string
  'input-background-color-disabled': string
  'input-border-color': string
  'input-border-color-hover': string
  'input-border-color-focus': string
  'input-border-color-disabled': string
  'input-border-width': string
  'input-border-radius-small': string
  'input-border-radius-medium': string
  'input-border-radius-large': string
  'input-font-family': string
  'input-font-weight': string
  'input-font-size-small': string
  'input-font-size-medium': string
  'input-font-size-large': string
  'input-letter-spacing': string
  'input-color': string
  'input-color-hover': string
  'input-color-focus': string
  'input-color-disabled': string
  'input-icon-color': string
  'input-icon-color-hover': string
  'input-icon-color-focus': string
  'input-placeholder-color': string
  'input-placeholder-color-disabled': string
  'input-spacing-small': string
  'input-spacing-medium': string
  'input-spacing-large': string
  'input-label-font-size-small': string
  'input-label-font-size-medium': string
  'input-label-font-size-large': string
  'input-label-color': string
  'input-help-text-font-size-small': string
  'input-help-text-font-size-medium': string
  'input-help-text-font-size-large': string
  'input-help-text-color': string
  'toggle-size': string
  'overlay-background-color': string
  'panel-background-color': string
  'panel-border-color': string
  'tooltip-border-radius': string
  'tooltip-background-color': string
  'tooltip-color': string
  'tooltip-font-family': string
  'tooltip-font-weight': string
  'tooltip-font-size': string
  'tooltip-line-height': string
  'tooltip-padding': string
  'tooltip-arrow-size': string
  'tooltip-arrow-start-end-offset': string
  'z-index-drawer': string
  'z-index-dialog': string
  'z-index-dropdown': string
  'z-index-toast': string
  'z-index-tooltip': string
}>
