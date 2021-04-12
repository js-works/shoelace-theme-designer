import { experimentalTheme } from './experimental-theme'
import { createTheme, invertTheme } from './theme-utils'

// === exports =======================================================

export { experimentalDarkTheme }

// === theme =========================================================

const experimentalDarkTheme = createTheme(
  {
    'color-black': '#ffff',
    'color-white': '#1c1c1c',
    'color-warning-text': 'var(--sl-color-white)',
    'color-primary-50': '#002F53',
    'color-primary-100': '#004B84',
    'color-primary-200': '#005697',
    'color-primary-300': '#0065B1',
    'color-primary-400': '#007CDA',
    'color-primary-500': '#0c96ff',
    'color-primary-600': '#49B0FF',
    'color-primary-700': '#99D3FF',
    'color-primary-800': '#DCF0FF',
    'color-primary-900': '#FFFFFF',
    'color-primary-950': '#FFFFFF',
    'color-gray-50': '#1B1D21',
    'color-gray-100': '#24262B',
    'color-gray-200': '#373A41',
    'color-gray-300': '#575C68',
    'color-gray-400': '#6F7685',
    'color-gray-500': '#9da2ad',
    'color-gray-600': '#E6E7EA',
    'color-gray-700': '#FFFFFF',
    'color-gray-800': '#FFFFFF',
    'color-gray-900': '#FFFFFF',
    'color-gray-950': '#FFFFFF',
    'color-success-50': '#00371A',
    'color-success-100': '#005226',
    'color-success-200': '#00632E',
    'color-success-300': '#007838',
    'color-success-400': '#009645',
    'color-success-500': '#00ba56',
    'color-success-600': '#00EE6E',
    'color-success-700': '#2DFF8E',
    'color-success-800': '#5FFFA9',
    'color-success-900': '#7DFFB9',
    'color-success-950': '#8EFFC2',
    'color-info-50': '#1A1D22',
    'color-info-100': '#22262C',
    'color-info-200': '#353A43',
    'color-info-300': '#535C6A',
    'color-info-400': '#6B7588',
    'color-info-500': '#99a1af',
    'color-info-600': '#E4E6EA',
    'color-info-700': '#FFFFFF',
    'color-info-800': '#FFFFFF',
    'color-info-900': '#FFFFFF',
    'color-info-950': '#FFFFFF',
    'color-danger-50': '#431A06',
    'color-danger-100': '#742E0A',
    'color-danger-200': '#84340B',
    'color-danger-300': '#9D3E0D',
    'color-danger-400': '#BF4C10',
    'color-danger-500': '#e35a13',
    'color-danger-600': '#EE7333',
    'color-danger-700': '#F18F5D',
    'color-danger-800': '#F4A379',
    'color-danger-900': '#F5B08B',
    'color-danger-950': '#F6B797'
  },
  invertTheme(experimentalTheme)
)
