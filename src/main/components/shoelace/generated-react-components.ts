/* =============================================================== *
 *  Important: This file is auto-generated - please don't edit it  *
 * =============================================================== */

// generated 2021-04-24T23:57:17.803Z

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

type SlAlertPropName = 'closable' | 'duration' | 'open' | 'type';

type SlAlertMethodName = 'hide' | 'show' | 'toast';

export const Alert = asComponent<SlAlert, Pick<SlAlert, SlAlertPropName>, Pick<SlAlert, SlAlertMethodName>>(
  'sl-alert',
  SlAlert,
  [SlIcon, SlIconButton]
);

type SlAnimationPropName = 'delay' | 'direction' | 'duration' | 'easing' | 'endDelay' | 'fill' | 'iterationStart' | 'iterations' | 'keyframes' | 'name' | 'pause' | 'playbackRate';

type SlAnimationMethodName = 'cancel' | 'finish' | 'getCurrentTime' | 'setCurrentTime';

export const Animation = asComponent<SlAnimation, Pick<SlAnimation, SlAnimationPropName>, Pick<SlAnimation, SlAnimationMethodName>>(
  'sl-animation',
  SlAnimation
);

type SlAvatarPropName = 'alt' | 'image' | 'initials' | 'shape';

export const Avatar = asComponent<SlAvatar, Pick<SlAvatar, SlAvatarPropName>, {}>(
  'sl-avatar',
  SlAvatar,
  [SlIcon]
);

type SlBadgePropName = 'pill' | 'pulse' | 'type';

export const Badge = asComponent<SlBadge, Pick<SlBadge, SlBadgePropName>, {}>(
  'sl-badge',
  SlBadge
);

type SlButtonPropName = 'caret' | 'circle' | 'disabled' | 'download' | 'href' | 'loading' | 'name' | 'pill' | 'size' | 'submit' | 'target' | 'type' | 'value';

type SlButtonMethodName = 'blur' | 'click' | 'focus';

export const Button = asComponent<SlButton, Pick<SlButton, SlButtonPropName>, Pick<SlButton, SlButtonMethodName>>(
  'sl-button',
  SlButton,
  [SlSpinner]
);

type SlButtonGroupPropName = 'label';

export const ButtonGroup = asComponent<SlButtonGroup, Pick<SlButtonGroup, SlButtonGroupPropName>, {}>(
  'sl-button-group',
  SlButtonGroup
);

export const Card = asComponent<SlCard, {}, {}>(
  'sl-card',
  SlCard
);

type SlCheckboxPropName = 'checked' | 'disabled' | 'indeterminate' | 'invalid' | 'name' | 'required' | 'value';

type SlCheckboxMethodName = 'blur' | 'click' | 'focus' | 'reportValidity' | 'setCustomValidity';

export const Checkbox = asComponent<SlCheckbox, Pick<SlCheckbox, SlCheckboxPropName>, Pick<SlCheckbox, SlCheckboxMethodName>>(
  'sl-checkbox',
  SlCheckbox
);

type SlColorPickerPropName = 'disabled' | 'format' | 'hoist' | 'inline' | 'invalid' | 'name' | 'noFormatToggle' | 'opacity' | 'size' | 'swatches' | 'uppercase' | 'value';

type SlColorPickerMethodName = 'getFormattedValue' | 'reportValidity' | 'setCustomValidity';

export const ColorPicker = asComponent<SlColorPicker, Pick<SlColorPicker, SlColorPickerPropName>, Pick<SlColorPicker, SlColorPickerMethodName>>(
  'sl-color-picker',
  SlColorPicker,
  [SlButton, SlDropdown, SlIcon, SlInput, SlSpinner]
);

type SlDetailsPropName = 'disabled' | 'open' | 'summary';

type SlDetailsMethodName = 'hide' | 'show';

export const Details = asComponent<SlDetails, Pick<SlDetails, SlDetailsPropName>, Pick<SlDetails, SlDetailsMethodName>>(
  'sl-details',
  SlDetails,
  [SlIcon]
);

type SlDialogPropName = 'label' | 'noHeader' | 'open';

type SlDialogMethodName = 'hide' | 'show';

export const Dialog = asComponent<SlDialog, Pick<SlDialog, SlDialogPropName>, Pick<SlDialog, SlDialogMethodName>>(
  'sl-dialog',
  SlDialog,
  [SlIcon, SlIconButton]
);

type SlDrawerPropName = 'contained' | 'label' | 'noHeader' | 'open' | 'placement';

type SlDrawerMethodName = 'hide' | 'show';

export const Drawer = asComponent<SlDrawer, Pick<SlDrawer, SlDrawerPropName>, Pick<SlDrawer, SlDrawerMethodName>>(
  'sl-drawer',
  SlDrawer,
  [SlIcon, SlIconButton]
);

type SlDropdownPropName = 'closeOnSelect' | 'containingElement' | 'distance' | 'hoist' | 'open' | 'placement' | 'skidding';

type SlDropdownMethodName = 'hide' | 'reposition' | 'show';

export const Dropdown = asComponent<SlDropdown, Pick<SlDropdown, SlDropdownPropName>, Pick<SlDropdown, SlDropdownMethodName>>(
  'sl-dropdown',
  SlDropdown
);

type SlFormPropName = 'novalidate';

type SlFormMethodName = 'getFormControls' | 'getFormData' | 'submit';

export const Form = asComponent<SlForm, Pick<SlForm, SlFormPropName>, Pick<SlForm, SlFormMethodName>>(
  'sl-form',
  SlForm
);

type SlFormatBytesPropName = 'locale' | 'unit' | 'value';

export const FormatBytes = asComponent<SlFormatBytes, Pick<SlFormatBytes, SlFormatBytesPropName>, {}>(
  'sl-format-bytes',
  SlFormatBytes
);

type SlFormatDatePropName = 'date' | 'day' | 'era' | 'hour' | 'hourFormat' | 'locale' | 'minute' | 'month' | 'second' | 'timeZone' | 'timeZoneName' | 'weekday' | 'year';

export const FormatDate = asComponent<SlFormatDate, Pick<SlFormatDate, SlFormatDatePropName>, {}>(
  'sl-format-date',
  SlFormatDate
);

type SlFormatNumberPropName = 'currency' | 'currencyDisplay' | 'locale' | 'maximumFractionDigits' | 'maximumSignificantDigits' | 'minimumFractionDigits' | 'minimumIntegerDigits' | 'minimumSignificantDigits' | 'noGrouping' | 'type' | 'value';

export const FormatNumber = asComponent<SlFormatNumber, Pick<SlFormatNumber, SlFormatNumberPropName>, {}>(
  'sl-format-number',
  SlFormatNumber
);

type SlIconPropName = 'label' | 'library' | 'name' | 'src';

export const Icon = asComponent<SlIcon, Pick<SlIcon, SlIconPropName>, {}>(
  'sl-icon',
  SlIcon
);

type SlIconButtonPropName = 'disabled' | 'label' | 'library' | 'name' | 'src';

export const IconButton = asComponent<SlIconButton, Pick<SlIconButton, SlIconButtonPropName>, {}>(
  'sl-icon-button',
  SlIconButton,
  [SlIcon]
);

type SlImageComparerPropName = 'position';

export const ImageComparer = asComponent<SlImageComparer, Pick<SlImageComparer, SlImageComparerPropName>, {}>(
  'sl-image-comparer',
  SlImageComparer,
  [SlIcon]
);

type SlIncludePropName = 'allowScripts' | 'mode' | 'src';

export const Include = asComponent<SlInclude, Pick<SlInclude, SlIncludePropName>, {}>(
  'sl-include',
  SlInclude
);

type SlInputPropName = 'autocapitalize' | 'autocomplete' | 'autocorrect' | 'autofocus' | 'clearable' | 'disabled' | 'helpText' | 'inputmode' | 'invalid' | 'label' | 'max' | 'maxlength' | 'min' | 'minlength' | 'name' | 'pattern' | 'pill' | 'placeholder' | 'readonly' | 'required' | 'size' | 'spellcheck' | 'step' | 'togglePassword' | 'type' | 'value';

type SlInputMethodName = 'blur' | 'focus' | 'reportValidity' | 'select' | 'setCustomValidity' | 'setRangeText' | 'setSelectionRange';

export const Input = asComponent<SlInput, Pick<SlInput, SlInputPropName>, Pick<SlInput, SlInputMethodName>>(
  'sl-input',
  SlInput,
  [SlIcon]
);

type SlMenuMethodName = 'typeToSelect';

export const Menu = asComponent<SlMenu, {}, Pick<SlMenu, SlMenuMethodName>>(
  'sl-menu',
  SlMenu
);

export const MenuDivider = asComponent<SlMenuDivider, {}, {}>(
  'sl-menu-divider',
  SlMenuDivider,
  [SlMenu]
);

type SlMenuItemPropName = 'checked' | 'disabled' | 'value';

type SlMenuItemMethodName = 'blur' | 'focus';

export const MenuItem = asComponent<SlMenuItem, Pick<SlMenuItem, SlMenuItemPropName>, Pick<SlMenuItem, SlMenuItemMethodName>>(
  'sl-menu-item',
  SlMenuItem,
  [SlIcon]
);

export const MenuLabel = asComponent<SlMenuLabel, {}, {}>(
  'sl-menu-label',
  SlMenuLabel,
  [SlMenu]
);

type SlProgressBarPropName = 'indeterminate' | 'percentage';

export const ProgressBar = asComponent<SlProgressBar, Pick<SlProgressBar, SlProgressBarPropName>, {}>(
  'sl-progress-bar',
  SlProgressBar
);

type SlProgressRingPropName = 'percentage' | 'size' | 'strokeWidth';

export const ProgressRing = asComponent<SlProgressRing, Pick<SlProgressRing, SlProgressRingPropName>, {}>(
  'sl-progress-ring',
  SlProgressRing
);

type SlQrCodePropName = 'background' | 'fill' | 'label' | 'radius' | 'size' | 'value';

export const QrCode = asComponent<SlQrCode, Pick<SlQrCode, SlQrCodePropName>, {}>(
  'sl-qr-code',
  SlQrCode
);

type SlRadioPropName = 'checked' | 'disabled' | 'invalid' | 'name' | 'value';

type SlRadioMethodName = 'blur' | 'click' | 'focus' | 'reportValidity' | 'setCustomValidity';

export const Radio = asComponent<SlRadio, Pick<SlRadio, SlRadioPropName>, Pick<SlRadio, SlRadioMethodName>>(
  'sl-radio',
  SlRadio
);

type SlRadioGroupPropName = 'label' | 'noFieldset';

export const RadioGroup = asComponent<SlRadioGroup, Pick<SlRadioGroup, SlRadioGroupPropName>, {}>(
  'sl-radio-group',
  SlRadioGroup
);

type SlRangePropName = 'disabled' | 'helpText' | 'invalid' | 'label' | 'max' | 'min' | 'name' | 'step' | 'tooltip' | 'value';

type SlRangeMethodName = 'blur' | 'focus' | 'setCustomValidity' | 'tooltipFormatter';

export const Range = asComponent<SlRange, Pick<SlRange, SlRangePropName>, Pick<SlRange, SlRangeMethodName>>(
  'sl-range',
  SlRange
);

type SlRatingPropName = 'disabled' | 'max' | 'precision' | 'readonly' | 'value';

type SlRatingMethodName = 'blur' | 'focus' | 'getSymbol';

export const Rating = asComponent<SlRating, Pick<SlRating, SlRatingPropName>, Pick<SlRating, SlRatingMethodName>>(
  'sl-rating',
  SlRating,
  [SlIcon]
);

type SlRelativeTimePropName = 'date' | 'format' | 'locale' | 'numeric' | 'sync';

export const RelativeTime = asComponent<SlRelativeTime, Pick<SlRelativeTime, SlRelativeTimePropName>, {}>(
  'sl-relative-time',
  SlRelativeTime
);

export const ResizeObserver = asComponent<SlResizeObserver, {}, {}>(
  'sl-resize-observer',
  SlResizeObserver
);

type SlResponsiveEmbedPropName = 'aspectRatio';

export const ResponsiveEmbed = asComponent<SlResponsiveEmbed, Pick<SlResponsiveEmbed, SlResponsiveEmbedPropName>, {}>(
  'sl-responsive-embed',
  SlResponsiveEmbed
);

type SlSelectPropName = 'clearable' | 'disabled' | 'helpText' | 'hoist' | 'invalid' | 'label' | 'maxTagsVisible' | 'multiple' | 'name' | 'pill' | 'placeholder' | 'required' | 'size' | 'value';

type SlSelectMethodName = 'reportValidity' | 'setCustomValidity';

export const Select = asComponent<SlSelect, Pick<SlSelect, SlSelectPropName>, Pick<SlSelect, SlSelectMethodName>>(
  'sl-select',
  SlSelect,
  [SlDropdown, SlIcon, SlIconButton, SlMenu, SlTag]
);

type SlSkeletonPropName = 'effect';

export const Skeleton = asComponent<SlSkeleton, Pick<SlSkeleton, SlSkeletonPropName>, {}>(
  'sl-skeleton',
  SlSkeleton
);

export const Spinner = asComponent<SlSpinner, {}, {}>(
  'sl-spinner',
  SlSpinner
);

type SlSwitchPropName = 'checked' | 'disabled' | 'invalid' | 'name' | 'required' | 'value';

type SlSwitchMethodName = 'blur' | 'click' | 'focus' | 'reportValidity' | 'setCustomValidity';

export const Switch = asComponent<SlSwitch, Pick<SlSwitch, SlSwitchPropName>, Pick<SlSwitch, SlSwitchMethodName>>(
  'sl-switch',
  SlSwitch
);

type SlTabPropName = 'active' | 'closable' | 'disabled' | 'panel';

type SlTabMethodName = 'blur' | 'focus';

export const Tab = asComponent<SlTab, Pick<SlTab, SlTabPropName>, Pick<SlTab, SlTabMethodName>>(
  'sl-tab',
  SlTab,
  [SlIcon, SlIconButton]
);

type SlTabGroupPropName = 'activation' | 'noScrollControls' | 'placement';

type SlTabGroupMethodName = 'show';

export const TabGroup = asComponent<SlTabGroup, Pick<SlTabGroup, SlTabGroupPropName>, Pick<SlTabGroup, SlTabGroupMethodName>>(
  'sl-tab-group',
  SlTabGroup,
  [SlIcon, SlIconButton]
);

type SlTabPanelPropName = 'active' | 'name';

export const TabPanel = asComponent<SlTabPanel, Pick<SlTabPanel, SlTabPanelPropName>, {}>(
  'sl-tab-panel',
  SlTabPanel
);

type SlTagPropName = 'clearable' | 'pill' | 'size' | 'type';

export const Tag = asComponent<SlTag, Pick<SlTag, SlTagPropName>, {}>(
  'sl-tag',
  SlTag,
  [SlIcon, SlIconButton]
);

type SlTextareaPropName = 'autocapitalize' | 'autocomplete' | 'autocorrect' | 'autofocus' | 'disabled' | 'helpText' | 'inputmode' | 'invalid' | 'label' | 'maxlength' | 'minlength' | 'name' | 'pattern' | 'placeholder' | 'readonly' | 'required' | 'resize' | 'rows' | 'size' | 'spellcheck' | 'value';

type SlTextareaMethodName = 'blur' | 'focus' | 'reportValidity' | 'select' | 'setCustomValidity' | 'setRangeText' | 'setSelectionRange';

export const Textarea = asComponent<SlTextarea, Pick<SlTextarea, SlTextareaPropName>, Pick<SlTextarea, SlTextareaMethodName>>(
  'sl-textarea',
  SlTextarea
);

type SlTooltipPropName = 'content' | 'disabled' | 'distance' | 'open' | 'placement' | 'skidding' | 'trigger';

type SlTooltipMethodName = 'hide' | 'show';

export const Tooltip = asComponent<SlTooltip, Pick<SlTooltip, SlTooltipPropName>, Pick<SlTooltip, SlTooltipMethodName>>(
  'sl-tooltip',
  SlTooltip
);

