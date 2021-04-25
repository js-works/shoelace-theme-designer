/* =============================================================== *
 *  Important: This file is auto-generated - please don't edit it  *
 * =============================================================== */

// generated 2021-04-25T07:42:46.690Z

import { HTMLAttributes, Ref } from 'react';
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

export type AlertProps = Pick<SlAlert, 'closable' | 'duration' | 'open' | 'type'> & HTMLAttributes<any>;
export type AlertElement = AlertProps & Pick<SlAlert, 'hide' | 'show' | 'toast'>;
export const Alert = asComponent<SlAlert, AlertElement, AlertProps>('sl-alert', SlAlert, [SlIcon, SlIconButton]);

export type AnimationProps = Pick<SlAnimation, 'delay' | 'direction' | 'duration' | 'easing' | 'endDelay' | 'fill' | 'iterationStart' | 'iterations' | 'keyframes' | 'name' | 'pause' | 'playbackRate'> & HTMLAttributes<any>;
export type AnimationElement = AnimationProps & Pick<SlAnimation, 'cancel' | 'finish' | 'getCurrentTime' | 'setCurrentTime'>;
export const Animation = asComponent<SlAnimation, AnimationElement, AnimationProps>('sl-animation', SlAnimation, []);

export type AvatarProps = Pick<SlAvatar, 'alt' | 'image' | 'initials' | 'shape'> & HTMLAttributes<any>;
export type AvatarElement = AvatarProps;
export const Avatar = asComponent<SlAvatar, AvatarElement, AvatarProps>('sl-avatar', SlAvatar, [SlIcon]);

export type BadgeProps = Pick<SlBadge, 'pill' | 'pulse' | 'type'> & HTMLAttributes<any>;
export type BadgeElement = BadgeProps;
export const Badge = asComponent<SlBadge, BadgeElement, BadgeProps>('sl-badge', SlBadge, []);

export type ButtonProps = Pick<SlButton, 'caret' | 'circle' | 'disabled' | 'download' | 'href' | 'loading' | 'name' | 'pill' | 'size' | 'submit' | 'target' | 'type' | 'value'> & HTMLAttributes<any>;
export type ButtonElement = ButtonProps & Pick<SlButton, 'blur' | 'click' | 'focus'>;
export const Button = asComponent<SlButton, ButtonElement, ButtonProps>('sl-button', SlButton, [SlSpinner]);

export type ButtonGroupProps = Pick<SlButtonGroup, 'label'> & HTMLAttributes<any>;
export type ButtonGroupElement = ButtonGroupProps;
export const ButtonGroup = asComponent<SlButtonGroup, ButtonGroupElement, ButtonGroupProps>('sl-button-group', SlButtonGroup, []);

type CardProps = HTMLAttributes<any>;
export type CardElement = CardProps;
export const Card = asComponent<SlCard, CardElement, {}>('sl-card', SlCard, []);

export type CheckboxProps = Pick<SlCheckbox, 'checked' | 'disabled' | 'indeterminate' | 'invalid' | 'name' | 'required' | 'value'> & HTMLAttributes<any>;
export type CheckboxElement = CheckboxProps & Pick<SlCheckbox, 'blur' | 'click' | 'focus' | 'reportValidity' | 'setCustomValidity'>;
export const Checkbox = asComponent<SlCheckbox, CheckboxElement, CheckboxProps>('sl-checkbox', SlCheckbox, []);

export type ColorPickerProps = Pick<SlColorPicker, 'disabled' | 'format' | 'hoist' | 'inline' | 'invalid' | 'name' | 'noFormatToggle' | 'opacity' | 'size' | 'swatches' | 'uppercase' | 'value'> & HTMLAttributes<any>;
export type ColorPickerElement = ColorPickerProps & Pick<SlColorPicker, 'getFormattedValue' | 'reportValidity' | 'setCustomValidity'>;
export const ColorPicker = asComponent<SlColorPicker, ColorPickerElement, ColorPickerProps>('sl-color-picker', SlColorPicker, [SlButton, SlDropdown, SlIcon, SlInput, SlSpinner]);

export type DetailsProps = Pick<SlDetails, 'disabled' | 'open' | 'summary'> & HTMLAttributes<any>;
export type DetailsElement = DetailsProps & Pick<SlDetails, 'hide' | 'show'>;
export const Details = asComponent<SlDetails, DetailsElement, DetailsProps>('sl-details', SlDetails, [SlIcon]);

export type DialogProps = Pick<SlDialog, 'label' | 'noHeader' | 'open'> & HTMLAttributes<any>;
export type DialogElement = DialogProps & Pick<SlDialog, 'hide' | 'show'>;
export const Dialog = asComponent<SlDialog, DialogElement, DialogProps>('sl-dialog', SlDialog, [SlIcon, SlIconButton]);

export type DrawerProps = Pick<SlDrawer, 'contained' | 'label' | 'noHeader' | 'open' | 'placement'> & HTMLAttributes<any>;
export type DrawerElement = DrawerProps & Pick<SlDrawer, 'hide' | 'show'>;
export const Drawer = asComponent<SlDrawer, DrawerElement, DrawerProps>('sl-drawer', SlDrawer, [SlIcon, SlIconButton]);

export type DropdownProps = Pick<SlDropdown, 'closeOnSelect' | 'containingElement' | 'distance' | 'hoist' | 'open' | 'placement' | 'skidding'> & HTMLAttributes<any>;
export type DropdownElement = DropdownProps & Pick<SlDropdown, 'hide' | 'reposition' | 'show'>;
export const Dropdown = asComponent<SlDropdown, DropdownElement, DropdownProps>('sl-dropdown', SlDropdown, []);

export type FormProps = Pick<SlForm, 'novalidate'> & HTMLAttributes<any>;
export type FormElement = FormProps & Pick<SlForm, 'getFormControls' | 'getFormData' | 'submit'>;
export const Form = asComponent<SlForm, FormElement, FormProps>('sl-form', SlForm, []);

export type FormatBytesProps = Pick<SlFormatBytes, 'locale' | 'unit' | 'value'> & HTMLAttributes<any>;
export type FormatBytesElement = FormatBytesProps;
export const FormatBytes = asComponent<SlFormatBytes, FormatBytesElement, FormatBytesProps>('sl-format-bytes', SlFormatBytes, []);

export type FormatDateProps = Pick<SlFormatDate, 'date' | 'day' | 'era' | 'hour' | 'hourFormat' | 'locale' | 'minute' | 'month' | 'second' | 'timeZone' | 'timeZoneName' | 'weekday' | 'year'> & HTMLAttributes<any>;
export type FormatDateElement = FormatDateProps;
export const FormatDate = asComponent<SlFormatDate, FormatDateElement, FormatDateProps>('sl-format-date', SlFormatDate, []);

export type FormatNumberProps = Pick<SlFormatNumber, 'currency' | 'currencyDisplay' | 'locale' | 'maximumFractionDigits' | 'maximumSignificantDigits' | 'minimumFractionDigits' | 'minimumIntegerDigits' | 'minimumSignificantDigits' | 'noGrouping' | 'type' | 'value'> & HTMLAttributes<any>;
export type FormatNumberElement = FormatNumberProps;
export const FormatNumber = asComponent<SlFormatNumber, FormatNumberElement, FormatNumberProps>('sl-format-number', SlFormatNumber, []);

export type IconProps = Pick<SlIcon, 'label' | 'library' | 'name' | 'src'> & HTMLAttributes<any>;
export type IconElement = IconProps;
export const Icon = asComponent<SlIcon, IconElement, IconProps>('sl-icon', SlIcon, []);

export type IconButtonProps = Pick<SlIconButton, 'disabled' | 'label' | 'library' | 'name' | 'src'> & HTMLAttributes<any>;
export type IconButtonElement = IconButtonProps;
export const IconButton = asComponent<SlIconButton, IconButtonElement, IconButtonProps>('sl-icon-button', SlIconButton, [SlIcon]);

export type ImageComparerProps = Pick<SlImageComparer, 'position'> & HTMLAttributes<any>;
export type ImageComparerElement = ImageComparerProps;
export const ImageComparer = asComponent<SlImageComparer, ImageComparerElement, ImageComparerProps>('sl-image-comparer', SlImageComparer, [SlIcon]);

export type IncludeProps = Pick<SlInclude, 'allowScripts' | 'mode' | 'src'> & HTMLAttributes<any>;
export type IncludeElement = IncludeProps;
export const Include = asComponent<SlInclude, IncludeElement, IncludeProps>('sl-include', SlInclude, []);

export type InputProps = Pick<SlInput, 'autocapitalize' | 'autocomplete' | 'autocorrect' | 'autofocus' | 'clearable' | 'disabled' | 'helpText' | 'inputmode' | 'invalid' | 'label' | 'max' | 'maxlength' | 'min' | 'minlength' | 'name' | 'pattern' | 'pill' | 'placeholder' | 'readonly' | 'required' | 'size' | 'spellcheck' | 'step' | 'togglePassword' | 'type' | 'value'> & HTMLAttributes<any>;
export type InputElement = InputProps & Pick<SlInput, 'blur' | 'focus' | 'reportValidity' | 'select' | 'setCustomValidity' | 'setRangeText' | 'setSelectionRange'>;
export const Input = asComponent<SlInput, InputElement, InputProps>('sl-input', SlInput, [SlIcon]);

type MenuProps = HTMLAttributes<any>;
export type MenuElement = MenuProps & Pick<SlMenu, 'typeToSelect'>;
export const Menu = asComponent<SlMenu, MenuElement, {}>('sl-menu', SlMenu, []);

type MenuDividerProps = HTMLAttributes<any>;
export type MenuDividerElement = MenuDividerProps;
export const MenuDivider = asComponent<SlMenuDivider, MenuDividerElement, {}>('sl-menu-divider', SlMenuDivider, [SlMenu]);

export type MenuItemProps = Pick<SlMenuItem, 'checked' | 'disabled' | 'value'> & HTMLAttributes<any>;
export type MenuItemElement = MenuItemProps & Pick<SlMenuItem, 'blur' | 'focus'>;
export const MenuItem = asComponent<SlMenuItem, MenuItemElement, MenuItemProps>('sl-menu-item', SlMenuItem, [SlIcon]);

type MenuLabelProps = HTMLAttributes<any>;
export type MenuLabelElement = MenuLabelProps;
export const MenuLabel = asComponent<SlMenuLabel, MenuLabelElement, {}>('sl-menu-label', SlMenuLabel, [SlMenu]);

export type ProgressBarProps = Pick<SlProgressBar, 'indeterminate' | 'percentage'> & HTMLAttributes<any>;
export type ProgressBarElement = ProgressBarProps;
export const ProgressBar = asComponent<SlProgressBar, ProgressBarElement, ProgressBarProps>('sl-progress-bar', SlProgressBar, []);

export type ProgressRingProps = Pick<SlProgressRing, 'percentage' | 'size' | 'strokeWidth'> & HTMLAttributes<any>;
export type ProgressRingElement = ProgressRingProps;
export const ProgressRing = asComponent<SlProgressRing, ProgressRingElement, ProgressRingProps>('sl-progress-ring', SlProgressRing, []);

export type QrCodeProps = Pick<SlQrCode, 'background' | 'fill' | 'label' | 'radius' | 'size' | 'value'> & HTMLAttributes<any>;
export type QrCodeElement = QrCodeProps;
export const QrCode = asComponent<SlQrCode, QrCodeElement, QrCodeProps>('sl-qr-code', SlQrCode, []);

export type RadioProps = Pick<SlRadio, 'checked' | 'disabled' | 'invalid' | 'name' | 'value'> & HTMLAttributes<any>;
export type RadioElement = RadioProps & Pick<SlRadio, 'blur' | 'click' | 'focus' | 'reportValidity' | 'setCustomValidity'>;
export const Radio = asComponent<SlRadio, RadioElement, RadioProps>('sl-radio', SlRadio, []);

export type RadioGroupProps = Pick<SlRadioGroup, 'label' | 'noFieldset'> & HTMLAttributes<any>;
export type RadioGroupElement = RadioGroupProps;
export const RadioGroup = asComponent<SlRadioGroup, RadioGroupElement, RadioGroupProps>('sl-radio-group', SlRadioGroup, []);

export type RangeProps = Pick<SlRange, 'disabled' | 'helpText' | 'invalid' | 'label' | 'max' | 'min' | 'name' | 'step' | 'tooltip' | 'value'> & HTMLAttributes<any>;
export type RangeElement = RangeProps & Pick<SlRange, 'blur' | 'focus' | 'setCustomValidity' | 'tooltipFormatter'>;
export const Range = asComponent<SlRange, RangeElement, RangeProps>('sl-range', SlRange, []);

export type RatingProps = Pick<SlRating, 'disabled' | 'max' | 'precision' | 'readonly' | 'value'> & HTMLAttributes<any>;
export type RatingElement = RatingProps & Pick<SlRating, 'blur' | 'focus' | 'getSymbol'>;
export const Rating = asComponent<SlRating, RatingElement, RatingProps>('sl-rating', SlRating, [SlIcon]);

export type RelativeTimeProps = Pick<SlRelativeTime, 'date' | 'format' | 'locale' | 'numeric' | 'sync'> & HTMLAttributes<any>;
export type RelativeTimeElement = RelativeTimeProps;
export const RelativeTime = asComponent<SlRelativeTime, RelativeTimeElement, RelativeTimeProps>('sl-relative-time', SlRelativeTime, []);

type ResizeObserverProps = HTMLAttributes<any>;
export type ResizeObserverElement = ResizeObserverProps;
export const ResizeObserver = asComponent<SlResizeObserver, ResizeObserverElement, {}>('sl-resize-observer', SlResizeObserver, []);

export type ResponsiveEmbedProps = Pick<SlResponsiveEmbed, 'aspectRatio'> & HTMLAttributes<any>;
export type ResponsiveEmbedElement = ResponsiveEmbedProps;
export const ResponsiveEmbed = asComponent<SlResponsiveEmbed, ResponsiveEmbedElement, ResponsiveEmbedProps>('sl-responsive-embed', SlResponsiveEmbed, []);

export type SelectProps = Pick<SlSelect, 'clearable' | 'disabled' | 'helpText' | 'hoist' | 'invalid' | 'label' | 'maxTagsVisible' | 'multiple' | 'name' | 'pill' | 'placeholder' | 'required' | 'size' | 'value'> & HTMLAttributes<any>;
export type SelectElement = SelectProps & Pick<SlSelect, 'reportValidity' | 'setCustomValidity'>;
export const Select = asComponent<SlSelect, SelectElement, SelectProps>('sl-select', SlSelect, [SlDropdown, SlIcon, SlIconButton, SlMenu, SlTag]);

export type SkeletonProps = Pick<SlSkeleton, 'effect'> & HTMLAttributes<any>;
export type SkeletonElement = SkeletonProps;
export const Skeleton = asComponent<SlSkeleton, SkeletonElement, SkeletonProps>('sl-skeleton', SlSkeleton, []);

type SpinnerProps = HTMLAttributes<any>;
export type SpinnerElement = SpinnerProps;
export const Spinner = asComponent<SlSpinner, SpinnerElement, {}>('sl-spinner', SlSpinner, []);

export type SwitchProps = Pick<SlSwitch, 'checked' | 'disabled' | 'invalid' | 'name' | 'required' | 'value'> & HTMLAttributes<any>;
export type SwitchElement = SwitchProps & Pick<SlSwitch, 'blur' | 'click' | 'focus' | 'reportValidity' | 'setCustomValidity'>;
export const Switch = asComponent<SlSwitch, SwitchElement, SwitchProps>('sl-switch', SlSwitch, []);

export type TabProps = Pick<SlTab, 'active' | 'closable' | 'disabled' | 'panel'> & HTMLAttributes<any>;
export type TabElement = TabProps & Pick<SlTab, 'blur' | 'focus'>;
export const Tab = asComponent<SlTab, TabElement, TabProps>('sl-tab', SlTab, [SlIcon, SlIconButton]);

export type TabGroupProps = Pick<SlTabGroup, 'activation' | 'noScrollControls' | 'placement'> & HTMLAttributes<any>;
export type TabGroupElement = TabGroupProps & Pick<SlTabGroup, 'show'>;
export const TabGroup = asComponent<SlTabGroup, TabGroupElement, TabGroupProps>('sl-tab-group', SlTabGroup, [SlIcon, SlIconButton]);

export type TabPanelProps = Pick<SlTabPanel, 'active' | 'name'> & HTMLAttributes<any>;
export type TabPanelElement = TabPanelProps;
export const TabPanel = asComponent<SlTabPanel, TabPanelElement, TabPanelProps>('sl-tab-panel', SlTabPanel, []);

export type TagProps = Pick<SlTag, 'clearable' | 'pill' | 'size' | 'type'> & HTMLAttributes<any>;
export type TagElement = TagProps;
export const Tag = asComponent<SlTag, TagElement, TagProps>('sl-tag', SlTag, [SlIcon, SlIconButton]);

export type TextareaProps = Pick<SlTextarea, 'autocapitalize' | 'autocomplete' | 'autocorrect' | 'autofocus' | 'disabled' | 'helpText' | 'inputmode' | 'invalid' | 'label' | 'maxlength' | 'minlength' | 'name' | 'pattern' | 'placeholder' | 'readonly' | 'required' | 'resize' | 'rows' | 'size' | 'spellcheck' | 'value'> & HTMLAttributes<any>;
export type TextareaElement = TextareaProps & Pick<SlTextarea, 'blur' | 'focus' | 'reportValidity' | 'select' | 'setCustomValidity' | 'setRangeText' | 'setSelectionRange'>;
export const Textarea = asComponent<SlTextarea, TextareaElement, TextareaProps>('sl-textarea', SlTextarea, []);

export type TooltipProps = Pick<SlTooltip, 'content' | 'disabled' | 'distance' | 'open' | 'placement' | 'skidding' | 'trigger'> & HTMLAttributes<any>;
export type TooltipElement = TooltipProps & Pick<SlTooltip, 'hide' | 'show'>;
export const Tooltip = asComponent<SlTooltip, TooltipElement, TooltipProps>('sl-tooltip', SlTooltip, []);

