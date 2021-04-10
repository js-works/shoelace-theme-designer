import { lightTheme } from './light-theme'
import { createTheme, invertTheme } from './theme-utils'

// === exports =======================================================

export { experimentalTheme }

// === theme =========================================================

const experimentalTheme = createTheme(
  {
    'color-primary-50': '#AADAFF',
    'color-primary-100': '#9BD4FF',
    'color-primary-200': '#7AC5FF',
    'color-primary-300': '#45AEFF',
    'color-primary-400': '#0693FF',
    'color-primary-500': '#0078d4',
    'color-primary-600': '#0062AD',
    'color-primary-700': '#00508D',
    'color-primary-800': '#004478',
    'color-primary-900': '#003B69',
    'color-primary-950': '#002542',
    'color-primary-text': 'var(--sl-color-white)',
    'color-success-50': '#52FFA2',
    'color-success-100': '#44FF9A',
    'color-success-200': '#2AFF8C',
    'color-success-300': '#00FF76',
    'color-success-400': '#00CA5E',
    'color-success-500': '#009e49',
    'color-success-600': '#007F3A',
    'color-success-700': '#00662F',
    'color-success-800': '#005427',
    'color-success-900': '#004621',
    'color-success-950': '#002F16',
    'color-success-text': 'var(--sl-color-white)',
    'color-info-50': '#f9fafb',
    'color-info-100': '#f3f4f6',
    'color-info-200': '#e5e7eb',
    'color-info-300': '#d1d5db',
    'color-info-400': '#9ca3af',
    'color-info-500': '#6b7280',
    'color-info-600': '#4b5563',
    'color-info-700': '#374151',
    'color-info-800': '#1f2937',
    'color-info-900': '#111827',
    'color-info-950': '#0d131e',
    'color-info-text': 'var(--sl-color-white)',
    'color-warning-50': '#FEF8EC',
    'color-warning-100': '#FDEBC8',
    'color-warning-200': '#FAD48D',
    'color-warning-300': '#F8BE51',
    'color-warning-400': '#F6AF29',
    'color-warning-500': '#f5a40b',
    'color-warning-600': '#D68F09',
    'color-warning-700': '#B67907',
    'color-warning-800': '#9A6706',
    'color-warning-900': '#825705',
    'color-warning-950': '#543803',
    'color-warning-text': 'var(--sl-color-black)',
    'color-danger-50': '#F39B6D',
    'color-danger-100': '#F39462',
    'color-danger-200': '#F18952',
    'color-danger-300': '#EF7839',
    'color-danger-400': '#EC5E14',
    'color-danger-500': '#ca5010',
    'color-danger-600': '#AA430D',
    'color-danger-700': '#8C380B',
    'color-danger-800': '#762F09',
    'color-danger-900': '#672908',
    'color-danger-950': '#3B1705',
    'color-danger-text': 'var(--sl-color-white)',

    'border-radius-small': '2px',
    'border-radius-medium': '2px',
    'border-radius-large': '2px',
    'border-radius-x-large': '2px',

    'input-border-radius-small': '2px',
    'input-border-radius-medium': '2px',
    'input-border-radius-large': '2px'
  },
  lightTheme
)
