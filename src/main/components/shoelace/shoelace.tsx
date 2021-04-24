import { createElement, Component } from 'react'

import SlAlert from '@shoelace-style/shoelace/dist/components/alert/alert.js'
import SlAvatar from '@shoelace-style/shoelace/dist/components/avatar/avatar.js'
import SlBadge from '@shoelace-style/shoelace/dist/components/badge/badge.js'
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js'
import SlButtonGroup from '@shoelace-style/shoelace/dist/components/button-group/button-group.js'
import SlCheckbox from '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js'
import SlColorPicker from '@shoelace-style/shoelace/dist/components/color-picker/color-picker.js'
import SlDialog from '@shoelace-style/shoelace/dist/components/dialog/dialog.js'
import SlDrawer from '@shoelace-style/shoelace/dist/components/drawer/drawer.js'
import SlDropdown from '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js'
import SlIcon from '@shoelace-style/shoelace/dist/components/icon/icon.js'
import SlIconButton from '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js'
import SlInput from '@shoelace-style/shoelace/dist/components/input/input.js'
import SlMenu from '@shoelace-style/shoelace/dist/components/menu/menu.js'
import SlMenuDivider from '@shoelace-style/shoelace/dist/components/menu-divider/menu-divider.js'
import SlMenuItem from '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js'
import SlRadio from '@shoelace-style/shoelace/dist/components/radio/radio.js'
import SlRange from '@shoelace-style/shoelace/dist/components/range/range.js'
import SlRating from '@shoelace-style/shoelace/dist/components/rating/rating.js'
import SlSelect from '@shoelace-style/shoelace/dist/components/select/select.js'
import SlSpinner from '@shoelace-style/shoelace/dist/components/spinner/spinner.js'
import SlSwitch from '@shoelace-style/shoelace/dist/components/switch/switch.js'
import SlTab from '@shoelace-style/shoelace/dist/components/tab/tab.js'
import SlTag from '@shoelace-style/shoelace/dist/components/tag/tag.js'
import SlTabGroup from '@shoelace-style/shoelace/dist/components/tab-group/tab-group'
import SlTabPanel from '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel'
import SlTooltip from '@shoelace-style/shoelace/dist/components/tooltip/tooltip'

// === exports =======================================================

export const Alert = asComponent('sl-alert', SlAlert, [SlIcon, SlIconButton])
export const Avatar = asComponent('sl-avatar', SlAvatar, [SlIcon])
export const Badge = asComponent('sl-badge', SlBadge)
export const Button = asComponent('sl-button', SlButton, [SlSpinner])
export const ButtonGroup = asComponent('sl-button-group', SlButtonGroup)

export const ColorPicker = asComponent('sl-color-picker', SlColorPicker, [
  SlButton,
  SlDropdown,
  SlIcon,
  SlInput,
  SlSpinner
])

export const Checkbox = asComponent('sl-checkbox', SlCheckbox)
export const Dialog = asComponent('sl-dialog', SlDialog, [SlIcon, SlIconButton])
export const Drawer = asComponent('sl-drawer', SlDrawer, [SlIcon, SlIconButton])
export const Dropdown = asComponent('sl-dropdown', SlDropdown)
export const Icon = asComponent('sl-icon', SlIcon)
export const IconButton = asComponent('sl-button-icon', SlIconButton, [SlIcon])
export const Input = asComponent('sl-input', SlInput, [SlIcon])
export const Menu = asComponent('sl-menu', SlMenu)
export const MenuDivider = asComponent('sl-menu-divider', SlMenuDivider)
export const MenuItem = asComponent('sl-menu-item', SlMenuItem)
export const Radio = asComponent('sl-radio', SlRadio)
export const Range = asComponent('sl-range', SlRange)
export const Rating = asComponent('sl-rating', SlRating, [SlIcon])

export const Select = asComponent('sl-select', SlSelect, [
  SlDropdown,
  SlIcon,
  SlIconButton,
  SlMenu,
  SlTag
])

export const Spinner = asComponent('sl-spinner', SlSpinner)
export const Switch = asComponent('sl-switch', SlSwitch)
export const Tab = asComponent('sl-tab', SlTab, [SlIcon, SlIconButton])

export const TabGroup = asComponent('sl-tab-group', SlTabGroup, [
  SlIcon,
  SlIconButton
])

export const TabPanel = asComponent('sl-tab-panel', SlTabPanel)
export const Tag = asComponent('sl-tag', SlTag, [SlIcon, SlIconButton])
export const Tooltip = asComponent('sl-tooltip', SlTooltip)

// === utils =========================================================

// Notes:
// - argument `elementClass` will be needed for proper typing
//   in future, also it makes sure that the element class will
//   never be tree-shaken away and the corresponding custom
//   element will be always be automatically registered
//
// - argument `dependencies` is used to make sure that all the
//   depending elements are properly registered and not tree-shaken
//   away
function asComponent(
  tagName: string,
  elementClass: any,
  dependencies?: any[]
): any {
  const compo = class extends Component<any> {
    element: HTMLElement | null = null

    componentDidMount() {
      this.element && syncProps(this.element, this.props)
    }

    componentDidUpdate() {
      this.element && syncProps(this.element, this.props)
    }

    render() {
      // start workaround due to bug - see: https://github.com/shoelace-style/shoelace/issues/425
      let p: any = null

      if (tagName === 'sl-color-picker' && this.props.value) {
        p = { value: this.props.value }
      } else if (tagName === 'sl-alert' && this.props.open === true) {
        p = { open: '' }
      }
      // end workaround - see also usage of variable `p` below

      return createElement(tagName, {
        ...p,
        ref: (elem: any) => (this.element = elem),
        style: this.props.style,
        children: this.props.children
      })
    }
  }

  ;(compo as any).displayName = tagName

  return compo
}

function syncProps(element: HTMLElement, props: Record<string, any>) {
  const el: any = element

  Object.keys(props).forEach((name) => {
    if (name === 'children' || name === 'style') {
      return
    }

    if (name.indexOf('on') === 0) {
      syncEvent(el, name.substring(2), props[name])
    } else {
      el[name] = props[name]
    }
  })
}

function syncEvent(
  element: HTMLElement,
  eventName: string,
  newEventHandler: Function | null | undefined
): void {
  const el: any = element
  const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1)
  const eventStore = el.__events || (el.__events = {})
  const oldEventHandler = eventStore[eventNameLc]

  if (oldEventHandler === newEventHandler) {
    return
  }

  if (oldEventHandler) {
    el.removeEventListener(eventNameLc, oldEventHandler)
  }

  if (newEventHandler) {
    el.addEventListener(
      eventNameLc,
      (eventStore[eventNameLc] = function handler(event: any) {
        newEventHandler.call(this, event)
      })
    )
  }
}
