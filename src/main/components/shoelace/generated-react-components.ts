/* =============================================================== *
 *  Important: This file is auto-generated - please don't edit it  *
 * =============================================================== */

// generated 2021-04-24T22:28:05.858Z

import { asComponent } from './react-wrapper';

import SlAlert from '@shoelace-style/shoelace/dist/components/alert/alert.js';
import SlAnimation from '@shoelace-style/shoelace/dist/components/animation/animation.js';
import SlAvatar from '@shoelace-style/shoelace/dist/components/avatar/avatar.js';
import SlBadge from '@shoelace-style/shoelace/dist/components/badge/badge.js';
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js';
import SlButtonGroup from '@shoelace-style/shoelace/dist/components/button-group/button-group.js';
import SlCard from '@shoelace-style/shoelace/dist/components/card/card.js';
import SlCheckbox from '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import SlColorPicker from '@shoelace-style/shoelace/dist/components/color-picker/color-picker.js';
import SlDetails from '@shoelace-style/shoelace/dist/components/details/details.js';
import SlDialog from '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import SlDrawer from '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import SlDropdown from '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import SlForm from '@shoelace-style/shoelace/dist/components/form/form.js';
import SlFormatBytes from '@shoelace-style/shoelace/dist/components/format-bytes/format-bytes.js';
import SlFormatDate from '@shoelace-style/shoelace/dist/components/format-date/format-date.js';
import SlFormatNumber from '@shoelace-style/shoelace/dist/components/format-number/format-number.js';
import SlIcon from '@shoelace-style/shoelace/dist/components/icon/icon.js';
import SlIconButton from '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import SlImageComparer from '@shoelace-style/shoelace/dist/components/image-comparer/image-comparer.js';
import SlInclude from '@shoelace-style/shoelace/dist/components/include/include.js';
import SlInput from '@shoelace-style/shoelace/dist/components/input/input.js';
import SlMenu from '@shoelace-style/shoelace/dist/components/menu/menu.js';
import SlMenuDivider from '@shoelace-style/shoelace/dist/components/menu-divider/menu-divider.js';
import SlMenuItem from '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import SlMenuLabel from '@shoelace-style/shoelace/dist/components/menu-label/menu-label.js';
import SlProgressBar from '@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js';
import SlProgressRing from '@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.js';
import SlQrCode from '@shoelace-style/shoelace/dist/components/qr-code/qr-code.js';
import SlRadio from '@shoelace-style/shoelace/dist/components/radio/radio.js';
import SlRadioGroup from '@shoelace-style/shoelace/dist/components/radio-group/radio-group.js';
import SlRange from '@shoelace-style/shoelace/dist/components/range/range.js';
import SlRating from '@shoelace-style/shoelace/dist/components/rating/rating.js';
import SlRelativeTime from '@shoelace-style/shoelace/dist/components/relative-time/relative-time.js';
import SlResizeObserver from '@shoelace-style/shoelace/dist/components/resize-observer/resize-observer.js';
import SlResponsiveEmbed from '@shoelace-style/shoelace/dist/components/responsive-embed/responsive-embed.js';
import SlSelect from '@shoelace-style/shoelace/dist/components/select/select.js';
import SlSkeleton from '@shoelace-style/shoelace/dist/components/skeleton/skeleton.js';
import SlSpinner from '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import SlSwitch from '@shoelace-style/shoelace/dist/components/switch/switch.js';
import SlTab from '@shoelace-style/shoelace/dist/components/tab/tab.js';
import SlTabGroup from '@shoelace-style/shoelace/dist/components/tab-group/tab-group.js';
import SlTabPanel from '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.js';
import SlTag from '@shoelace-style/shoelace/dist/components/tag/tag.js';
import SlTextarea from '@shoelace-style/shoelace/dist/components/textarea/textarea.js';
import SlTooltip from '@shoelace-style/shoelace/dist/components/tooltip/tooltip.js';

type SlAlertMethods = 'hide' | 'show' | 'toast;'

export const Alert = asComponent<SlAlert, SlAlertMethods>(
  'sl-alert',
  SlAlert,
  [SlIcon, SlIconButton]
);

type SlAnimationMethods = 'cancel' | 'finish' | 'getCurrentTime' | 'setCurrentTime;'

export const Animation = asComponent<SlAnimation, SlAnimationMethods>(
  'sl-animation',
  SlAnimation
);

export const Avatar = asComponent<SlAvatar>(
  'sl-avatar',
  SlAvatar,
  [SlIcon]
);

export const Badge = asComponent<SlBadge>(
  'sl-badge',
  SlBadge
);

type SlButtonMethods = 'blur' | 'click' | 'focus;'

export const Button = asComponent<SlButton, SlButtonMethods>(
  'sl-button',
  SlButton,
  [SlSpinner]
);

export const ButtonGroup = asComponent<SlButtonGroup>(
  'sl-button-group',
  SlButtonGroup
);

export const Card = asComponent<SlCard>(
  'sl-card',
  SlCard
);

type SlCheckboxMethods = 'blur' | 'click' | 'focus' | 'reportValidity' | 'setCustomValidity;'

export const Checkbox = asComponent<SlCheckbox, SlCheckboxMethods>(
  'sl-checkbox',
  SlCheckbox
);

type SlColorPickerMethods = 'getFormattedValue' | 'reportValidity' | 'setCustomValidity;'

export const ColorPicker = asComponent<SlColorPicker, SlColorPickerMethods>(
  'sl-color-picker',
  SlColorPicker,
  [SlButton, SlDropdown, SlIcon, SlInput, SlSpinner]
);

type SlDetailsMethods = 'hide' | 'show;'

export const Details = asComponent<SlDetails, SlDetailsMethods>(
  'sl-details',
  SlDetails,
  [SlIcon]
);

type SlDialogMethods = 'hide' | 'show;'

export const Dialog = asComponent<SlDialog, SlDialogMethods>(
  'sl-dialog',
  SlDialog,
  [SlIcon, SlIconButton]
);

type SlDrawerMethods = 'hide' | 'show;'

export const Drawer = asComponent<SlDrawer, SlDrawerMethods>(
  'sl-drawer',
  SlDrawer,
  [SlIcon, SlIconButton]
);

type SlDropdownMethods = 'hide' | 'reposition' | 'show;'

export const Dropdown = asComponent<SlDropdown, SlDropdownMethods>(
  'sl-dropdown',
  SlDropdown
);

type SlFormMethods = 'getFormControls' | 'getFormData' | 'submit;'

export const Form = asComponent<SlForm, SlFormMethods>(
  'sl-form',
  SlForm
);

export const FormatBytes = asComponent<SlFormatBytes>(
  'sl-format-bytes',
  SlFormatBytes
);

export const FormatDate = asComponent<SlFormatDate>(
  'sl-format-date',
  SlFormatDate
);

export const FormatNumber = asComponent<SlFormatNumber>(
  'sl-format-number',
  SlFormatNumber
);

export const Icon = asComponent<SlIcon>(
  'sl-icon',
  SlIcon
);

export const IconButton = asComponent<SlIconButton>(
  'sl-icon-button',
  SlIconButton,
  [SlIcon]
);

export const ImageComparer = asComponent<SlImageComparer>(
  'sl-image-comparer',
  SlImageComparer,
  [SlIcon]
);

export const Include = asComponent<SlInclude>(
  'sl-include',
  SlInclude
);

type SlInputMethods = 'blur' | 'focus' | 'reportValidity' | 'select' | 'setCustomValidity' | 'setRangeText' | 'setSelectionRange;'

export const Input = asComponent<SlInput, SlInputMethods>(
  'sl-input',
  SlInput,
  [SlIcon]
);

type SlMenuMethods = 'typeToSelect;'

export const Menu = asComponent<SlMenu, SlMenuMethods>(
  'sl-menu',
  SlMenu
);

export const MenuDivider = asComponent<SlMenuDivider>(
  'sl-menu-divider',
  SlMenuDivider,
  [SlMenu]
);

type SlMenuItemMethods = 'blur' | 'focus;'

export const MenuItem = asComponent<SlMenuItem, SlMenuItemMethods>(
  'sl-menu-item',
  SlMenuItem,
  [SlIcon]
);

export const MenuLabel = asComponent<SlMenuLabel>(
  'sl-menu-label',
  SlMenuLabel,
  [SlMenu]
);

export const ProgressBar = asComponent<SlProgressBar>(
  'sl-progress-bar',
  SlProgressBar
);

export const ProgressRing = asComponent<SlProgressRing>(
  'sl-progress-ring',
  SlProgressRing
);

export const QrCode = asComponent<SlQrCode>(
  'sl-qr-code',
  SlQrCode
);

type SlRadioMethods = 'blur' | 'click' | 'focus' | 'reportValidity' | 'setCustomValidity;'

export const Radio = asComponent<SlRadio, SlRadioMethods>(
  'sl-radio',
  SlRadio
);

export const RadioGroup = asComponent<SlRadioGroup>(
  'sl-radio-group',
  SlRadioGroup
);

type SlRangeMethods = 'blur' | 'focus' | 'setCustomValidity' | 'tooltipFormatter;'

export const Range = asComponent<SlRange, SlRangeMethods>(
  'sl-range',
  SlRange
);

type SlRatingMethods = 'blur' | 'focus' | 'getSymbol;'

export const Rating = asComponent<SlRating, SlRatingMethods>(
  'sl-rating',
  SlRating,
  [SlIcon]
);

export const RelativeTime = asComponent<SlRelativeTime>(
  'sl-relative-time',
  SlRelativeTime
);

export const ResizeObserver = asComponent<SlResizeObserver>(
  'sl-resize-observer',
  SlResizeObserver
);

export const ResponsiveEmbed = asComponent<SlResponsiveEmbed>(
  'sl-responsive-embed',
  SlResponsiveEmbed
);

type SlSelectMethods = 'reportValidity' | 'setCustomValidity;'

export const Select = asComponent<SlSelect, SlSelectMethods>(
  'sl-select',
  SlSelect,
  [SlDropdown, SlIcon, SlIconButton, SlMenu, SlTag]
);

export const Skeleton = asComponent<SlSkeleton>(
  'sl-skeleton',
  SlSkeleton
);

export const Spinner = asComponent<SlSpinner>(
  'sl-spinner',
  SlSpinner
);

type SlSwitchMethods = 'blur' | 'click' | 'focus' | 'reportValidity' | 'setCustomValidity;'

export const Switch = asComponent<SlSwitch, SlSwitchMethods>(
  'sl-switch',
  SlSwitch
);

type SlTabMethods = 'blur' | 'focus;'

export const Tab = asComponent<SlTab, SlTabMethods>(
  'sl-tab',
  SlTab,
  [SlIcon, SlIconButton]
);

type SlTabGroupMethods = 'show;'

export const TabGroup = asComponent<SlTabGroup, SlTabGroupMethods>(
  'sl-tab-group',
  SlTabGroup,
  [SlIcon, SlIconButton]
);

export const TabPanel = asComponent<SlTabPanel>(
  'sl-tab-panel',
  SlTabPanel
);

export const Tag = asComponent<SlTag>(
  'sl-tag',
  SlTag,
  [SlIcon, SlIconButton]
);

type SlTextareaMethods = 'blur' | 'focus' | 'reportValidity' | 'select' | 'setCustomValidity' | 'setRangeText' | 'setSelectionRange;'

export const Textarea = asComponent<SlTextarea, SlTextareaMethods>(
  'sl-textarea',
  SlTextarea
);

type SlTooltipMethods = 'hide' | 'show;'

export const Tooltip = asComponent<SlTooltip, SlTooltipMethods>(
  'sl-tooltip',
  SlTooltip
);

