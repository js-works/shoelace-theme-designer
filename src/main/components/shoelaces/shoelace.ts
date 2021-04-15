import { toComponent } from 'js-element'

import SlAlert from '@shoelace-style/shoelace/dist/components/alert/alert.js'
import SlBadge from '@shoelace-style/shoelace/dist/components/badge/badge.js'
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js'
import SlButtonGroup from '@shoelace-style/shoelace/dist/components/button-group/button-group.js'
import SlCheckbox from '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js'
import SlColorPicker from '@shoelace-style/shoelace/dist/components/color-picker/color-picker.js'
import SlDrawer from '@shoelace-style/shoelace/dist/components/drawer/drawer.js'
import SlDropdown from '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js'
import SlIcon from '@shoelace-style/shoelace/dist/components/icon/icon.js'
import SlInput from '@shoelace-style/shoelace/dist/components/input/input.js'
import SlMenu from '@shoelace-style/shoelace/dist/components/menu/menu.js'
import SlMenuDivider from '@shoelace-style/shoelace/dist/components/menu-divider/menu-divider.js'
import SlMenuItem from '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js'
import SlRange from '@shoelace-style/shoelace/dist/components/range/range.js'
import SlSelect from '@shoelace-style/shoelace/dist/components/select/select.js'
import SlTab from '@shoelace-style/shoelace/dist/components/tab/tab.js'
import SlTabGroup from '@shoelace-style/shoelace/dist/components/tab-group/tab-group'
import SlTabPanel from '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel'
import SlTooltip from '@shoelace-style/shoelace/dist/components/tooltip/tooltip'

// === exports =======================================================

export const Alert = toComponent('sl-alert', SlAlert)
export const Badge = toComponent('sl-badge', SlBadge)
export const Button = toComponent('sl-button', SlButton)
export const ButtonGroup = toComponent('sl-button-group', SlButtonGroup)
export const ColorPicker = toComponent('sl-color-picker', SlColorPicker)
export const Checkbox = toComponent('sl-checkbox', SlCheckbox)
export const Drawer = toComponent('sl-drawer', SlDrawer)
export const Dropdown = toComponent('sl-dropdown', SlDropdown)
export const Icon = toComponent('sl-icon', SlIcon)
export const Input = toComponent('sl-input', SlInput)
export const Menu = toComponent('sl-menu', SlMenu)
export const MenuDivider = toComponent('sl-menu-divider', SlMenuDivider)
export const MenuItem = toComponent('sl-menu-item', SlMenuItem)
export const Range = toComponent('sl-range', SlRange)
export const Select = toComponent('sl-select', SlSelect)
export const Tab = toComponent('sl-tab', SlTab)
export const TabGroup = toComponent('sl-tab-group', SlTabGroup)
export const TabPanel = toComponent('sl-tab-panel', SlTabPanel)
export const Tooltip = toComponent('sl-tooltip', SlTooltip)
