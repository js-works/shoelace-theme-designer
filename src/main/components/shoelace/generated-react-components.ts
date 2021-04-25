/* =============================================================== *
 *  Important: This file is auto-generated - please don't edit it  *
 * =============================================================== */

// generated 2021-04-25T07:51:49.753Z

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

export type AlertProps = HTMLAttributes<any> & Pick<SlAlert, 'closable' | 'duration' | 'open' | 'type'>;
export type AlertElement = AlertProps & Pick<SlAlert, 'hide' | 'show' | 'toast'>;
export const Alert = asComponent<SlAlert, AlertElement, AlertProps>('sl-alert', SlAlert, [SlIcon, SlIconButton]);

export type AnimationProps = HTMLAttributes<any> & Pick<SlAnimation, 'delay' | 'direction' | 'duration' | 'easing' | 'endDelay' | 'fill' | 'iterationStart' | 'iterations' | 'keyframes' | 'name' | 'pause' | 'playbackRate'>;
export type AnimationElement = AnimationProps & Pick<SlAnimation, 'cancel' | 'finish' | 'getCurrentTime' | 'setCurrentTime'>;
export const Animation = asComponent<SlAnimation, AnimationElement, AnimationProps>('sl-animation', SlAnimation, []);

export type AvatarProps = HTMLAttributes<any> & Pick<SlAvatar, 'alt' | 'image' | 'initials' | 'shape'>;
export type AvatarElement = AvatarProps;
export const Avatar = asComponent<SlAvatar, AvatarElement, AvatarProps>('sl-avatar', SlAvatar, [SlIcon]);

export type BadgeProps = HTMLAttributes<any> & Pick<SlBadge, 'pill' | 'pulse' | 'type'>;
export type BadgeElement = BadgeProps;
export const Badge = asComponent<SlBadge, BadgeElement, BadgeProps>('sl-badge', SlBadge, []);

export type ButtonProps = HTMLAttributes<any> & Pick<SlButton, 'caret' | 'circle' | 'disabled' | 'download' | 'href' | 'loading' | 'name' | 'pill' | 'size' | 'submit' | 'target' | 'type' | 'value'>;
export type ButtonElement = ButtonProps & Pick<SlButton, 'blur' | 'click' | 'focus'>;
export const Button = asComponent<SlButton, ButtonElement, ButtonProps>('sl-button', SlButton, [SlSpinner]);

export type ButtonGroupProps = HTMLAttributes<any> & Pick<SlButtonGroup, 'label'>;
export type ButtonGroupElement = ButtonGroupProps;
export const ButtonGroup = asComponent<SlButtonGroup, ButtonGroupElement, ButtonGroupProps>('sl-button-group', SlButtonGroup, []);

export type CardProps = HTMLAttributes<any>;
export type CardElement = CardProps;
export const Card = asComponent<SlCard, CardElement, {}>('sl-card', SlCard, []);

export type CheckboxProps = HTMLAttributes<any> & Pick<SlCheckbox, 'checked' | 'disabled' | 'indeterminate' | 'invalid' | 'name' | 'required' | 'value'>;
export type CheckboxElement = CheckboxProps & Pick<SlCheckbox, 'blur' | 'click' | 'focus' | 'reportValidity' | 'setCustomValidity'>;
export const Checkbox = asComponent<SlCheckbox, CheckboxElement, CheckboxProps>('sl-checkbox', SlCheckbox, []);

export type ColorPickerProps = HTMLAttributes<any> & Pick<SlColorPicker, 'disabled' | 'format' | 'hoist' | 'inline' | 'invalid' | 'name' | 'noFormatToggle' | 'opacity' | 'size' | 'swatches' | 'uppercase' | 'value'>;
export type ColorPickerElement = ColorPickerProps & Pick<SlColorPicker, 'getFormattedValue' | 'reportValidity' | 'setCustomValidity'>;
export const ColorPicker = asComponent<SlColorPicker, ColorPickerElement, ColorPickerProps>('sl-color-picker', SlColorPicker, [SlButton, SlDropdown, SlIcon, SlInput, SlSpinner]);

export type DetailsProps = HTMLAttributes<any> & Pick<SlDetails, 'disabled' | 'open' | 'summary'>;
export type DetailsElement = DetailsProps & Pick<SlDetails, 'hide' | 'show'>;
export const Details = asComponent<SlDetails, DetailsElement, DetailsProps>('sl-details', SlDetails, [SlIcon]);

export type DialogProps = HTMLAttributes<any> & Pick<SlDialog, 'label' | 'noHeader' | 'open'>;
export type DialogElement = DialogProps & Pick<SlDialog, 'hide' | 'show'>;
export const Dialog = asComponent<SlDialog, DialogElement, DialogProps>('sl-dialog', SlDialog, [SlIcon, SlIconButton]);

export type DrawerProps = HTMLAttributes<any> & Pick<SlDrawer, 'contained' | 'label' | 'noHeader' | 'open' | 'placement'>;
export type DrawerElement = DrawerProps & Pick<SlDrawer, 'hide' | 'show'>;
export const Drawer = asComponent<SlDrawer, DrawerElement, DrawerProps>('sl-drawer', SlDrawer, [SlIcon, SlIconButton]);

export type DropdownProps = HTMLAttributes<any> & Pick<SlDropdown, 'closeOnSelect' | 'containingElement' | 'distance' | 'hoist' | 'open' | 'placement' | 'skidding'>;
export type DropdownElement = DropdownProps & Pick<SlDropdown, 'hide' | 'reposition' | 'show'>;
export const Dropdown = asComponent<SlDropdown, DropdownElement, DropdownProps>('sl-dropdown', SlDropdown, []);

export type FormProps = HTMLAttributes<any> & Pick<SlForm, 'novalidate'>;
export type FormElement = FormProps & Pick<SlForm, 'getFormControls' | 'getFormData' | 'submit'>;
export const Form = asComponent<SlForm, FormElement, FormProps>('sl-form', SlForm, []);

export type FormatBytesProps = HTMLAttributes<any> & Pick<SlFormatBytes, 'locale' | 'unit' | 'value'>;
export type FormatBytesElement = FormatBytesProps;
export const FormatBytes = asComponent<SlFormatBytes, FormatBytesElement, FormatBytesProps>('sl-format-bytes', SlFormatBytes, []);

export type FormatDateProps = HTMLAttributes<any> & Pick<SlFormatDate, 'date' | 'day' | 'era' | 'hour' | 'hourFormat' | 'locale' | 'minute' | 'month' | 'second' | 'timeZone' | 'timeZoneName' | 'weekday' | 'year'>;
export type FormatDateElement = FormatDateProps;
export const FormatDate = asComponent<SlFormatDate, FormatDateElement, FormatDateProps>('sl-format-date', SlFormatDate, []);

export type FormatNumberProps = HTMLAttributes<any> & Pick<SlFormatNumber, 'currency' | 'currencyDisplay' | 'locale' | 'maximumFractionDigits' | 'maximumSignificantDigits' | 'minimumFractionDigits' | 'minimumIntegerDigits' | 'minimumSignificantDigits' | 'noGrouping' | 'type' | 'value'>;
export type FormatNumberElement = FormatNumberProps;
export const FormatNumber = asComponent<SlFormatNumber, FormatNumberElement, FormatNumberProps>('sl-format-number', SlFormatNumber, []);

export type IconProps = HTMLAttributes<any> & Pick<SlIcon, 'label' | 'library' | 'name' | 'src'>;
export type IconElement = IconProps;
export const Icon = asComponent<SlIcon, IconElement, IconProps>('sl-icon', SlIcon, []);

export type IconButtonProps = HTMLAttributes<any> & Pick<SlIconButton, 'disabled' | 'label' | 'library' | 'name' | 'src'>;
export type IconButtonElement = IconButtonProps;
export const IconButton = asComponent<SlIconButton, IconButtonElement, IconButtonProps>('sl-icon-button', SlIconButton, [SlIcon]);

export type ImageComparerProps = HTMLAttributes<any> & Pick<SlImageComparer, 'position'>;
export type ImageComparerElement = ImageComparerProps;
export const ImageComparer = asComponent<SlImageComparer, ImageComparerElement, ImageComparerProps>('sl-image-comparer', SlImageComparer, [SlIcon]);

export type IncludeProps = HTMLAttributes<any> & Pick<SlInclude, 'allowScripts' | 'mode' | 'src'>;
export type IncludeElement = IncludeProps;
export const Include = asComponent<SlInclude, IncludeElement, IncludeProps>('sl-include', SlInclude, []);

export type InputProps = HTMLAttributes<any> & Pick<SlInput, 'autocapitalize' | 'autocomplete' | 'autocorrect' | 'autofocus' | 'clearable' | 'disabled' | 'helpText' | 'inputmode' | 'invalid' | 'label' | 'max' | 'maxlength' | 'min' | 'minlength' | 'name' | 'pattern' | 'pill' | 'placeholder' | 'readonly' | 'required' | 'size' | 'spellcheck' | 'step' | 'togglePassword' | 'type' | 'value'>;
export type InputElement = InputProps & Pick<SlInput, 'blur' | 'focus' | 'reportValidity' | 'select' | 'setCustomValidity' | 'setRangeText' | 'setSelectionRange'>;
export const Input = asComponent<SlInput, InputElement, InputProps>('sl-input', SlInput, [SlIcon]);

export type MenuProps = HTMLAttributes<any>;
export type MenuElement = MenuProps & Pick<SlMenu, 'typeToSelect'>;
export const Menu = asComponent<SlMenu, MenuElement, {}>('sl-menu', SlMenu, []);

export type MenuDividerProps = HTMLAttributes<any>;
export type MenuDividerElement = MenuDividerProps;
export const MenuDivider = asComponent<SlMenuDivider, MenuDividerElement, {}>('sl-menu-divider', SlMenuDivider, [SlMenu]);

export type MenuItemProps = HTMLAttributes<any> & Pick<SlMenuItem, 'checked' | 'disabled' | 'value'>;
export type MenuItemElement = MenuItemProps & Pick<SlMenuItem, 'blur' | 'focus'>;
export const MenuItem = asComponent<SlMenuItem, MenuItemElement, MenuItemProps>('sl-menu-item', SlMenuItem, [SlIcon]);

export type MenuLabelProps = HTMLAttributes<any>;
export type MenuLabelElement = MenuLabelProps;
export const MenuLabel = asComponent<SlMenuLabel, MenuLabelElement, {}>('sl-menu-label', SlMenuLabel, [SlMenu]);

export type ProgressBarProps = HTMLAttributes<any> & Pick<SlProgressBar, 'indeterminate' | 'percentage'>;
export type ProgressBarElement = ProgressBarProps;
export const ProgressBar = asComponent<SlProgressBar, ProgressBarElement, ProgressBarProps>('sl-progress-bar', SlProgressBar, []);

export type ProgressRingProps = HTMLAttributes<any> & Pick<SlProgressRing, 'percentage' | 'size' | 'strokeWidth'>;
export type ProgressRingElement = ProgressRingProps;
export const ProgressRing = asComponent<SlProgressRing, ProgressRingElement, ProgressRingProps>('sl-progress-ring', SlProgressRing, []);

export type QrCodeProps = HTMLAttributes<any> & Pick<SlQrCode, 'background' | 'fill' | 'label' | 'radius' | 'size' | 'value'>;
export type QrCodeElement = QrCodeProps;
export const QrCode = asComponent<SlQrCode, QrCodeElement, QrCodeProps>('sl-qr-code', SlQrCode, []);

export type RadioProps = HTMLAttributes<any> & Pick<SlRadio, 'checked' | 'disabled' | 'invalid' | 'name' | 'value'>;
export type RadioElement = RadioProps & Pick<SlRadio, 'blur' | 'click' | 'focus' | 'reportValidity' | 'setCustomValidity'>;
export const Radio = asComponent<SlRadio, RadioElement, RadioProps>('sl-radio', SlRadio, []);

export type RadioGroupProps = HTMLAttributes<any> & Pick<SlRadioGroup, 'label' | 'noFieldset'>;
export type RadioGroupElement = RadioGroupProps;
export const RadioGroup = asComponent<SlRadioGroup, RadioGroupElement, RadioGroupProps>('sl-radio-group', SlRadioGroup, []);

export type RangeProps = HTMLAttributes<any> & Pick<SlRange, 'disabled' | 'helpText' | 'invalid' | 'label' | 'max' | 'min' | 'name' | 'step' | 'tooltip' | 'value'>;
export type RangeElement = RangeProps & Pick<SlRange, 'blur' | 'focus' | 'setCustomValidity' | 'tooltipFormatter'>;
export const Range = asComponent<SlRange, RangeElement, RangeProps>('sl-range', SlRange, []);

export type RatingProps = HTMLAttributes<any> & Pick<SlRating, 'disabled' | 'max' | 'precision' | 'readonly' | 'value'>;
export type RatingElement = RatingProps & Pick<SlRating, 'blur' | 'focus' | 'getSymbol'>;
export const Rating = asComponent<SlRating, RatingElement, RatingProps>('sl-rating', SlRating, [SlIcon]);

export type RelativeTimeProps = HTMLAttributes<any> & Pick<SlRelativeTime, 'date' | 'format' | 'locale' | 'numeric' | 'sync'>;
export type RelativeTimeElement = RelativeTimeProps;
export const RelativeTime = asComponent<SlRelativeTime, RelativeTimeElement, RelativeTimeProps>('sl-relative-time', SlRelativeTime, []);

export type ResizeObserverProps = HTMLAttributes<any>;
export type ResizeObserverElement = ResizeObserverProps;
export const ResizeObserver = asComponent<SlResizeObserver, ResizeObserverElement, {}>('sl-resize-observer', SlResizeObserver, []);

export type ResponsiveEmbedProps = HTMLAttributes<any> & Pick<SlResponsiveEmbed, 'aspectRatio'>;
export type ResponsiveEmbedElement = ResponsiveEmbedProps;
export const ResponsiveEmbed = asComponent<SlResponsiveEmbed, ResponsiveEmbedElement, ResponsiveEmbedProps>('sl-responsive-embed', SlResponsiveEmbed, []);

export type SelectProps = HTMLAttributes<any> & Pick<SlSelect, 'clearable' | 'disabled' | 'helpText' | 'hoist' | 'invalid' | 'label' | 'maxTagsVisible' | 'multiple' | 'name' | 'pill' | 'placeholder' | 'required' | 'size' | 'value'>;
export type SelectElement = SelectProps & Pick<SlSelect, 'reportValidity' | 'setCustomValidity'>;
export const Select = asComponent<SlSelect, SelectElement, SelectProps>('sl-select', SlSelect, [SlDropdown, SlIcon, SlIconButton, SlMenu, SlTag]);

export type SkeletonProps = HTMLAttributes<any> & Pick<SlSkeleton, 'effect'>;
export type SkeletonElement = SkeletonProps;
export const Skeleton = asComponent<SlSkeleton, SkeletonElement, SkeletonProps>('sl-skeleton', SlSkeleton, []);

export type SpinnerProps = HTMLAttributes<any>;
export type SpinnerElement = SpinnerProps;
export const Spinner = asComponent<SlSpinner, SpinnerElement, {}>('sl-spinner', SlSpinner, []);

export type SwitchProps = HTMLAttributes<any> & Pick<SlSwitch, 'checked' | 'disabled' | 'invalid' | 'name' | 'required' | 'value'>;
export type SwitchElement = SwitchProps & Pick<SlSwitch, 'blur' | 'click' | 'focus' | 'reportValidity' | 'setCustomValidity'>;
export const Switch = asComponent<SlSwitch, SwitchElement, SwitchProps>('sl-switch', SlSwitch, []);

export type TabProps = HTMLAttributes<any> & Pick<SlTab, 'active' | 'closable' | 'disabled' | 'panel'>;
export type TabElement = TabProps & Pick<SlTab, 'blur' | 'focus'>;
export const Tab = asComponent<SlTab, TabElement, TabProps>('sl-tab', SlTab, [SlIcon, SlIconButton]);

export type TabGroupProps = HTMLAttributes<any> & Pick<SlTabGroup, 'activation' | 'noScrollControls' | 'placement'>;
export type TabGroupElement = TabGroupProps & Pick<SlTabGroup, 'show'>;
export const TabGroup = asComponent<SlTabGroup, TabGroupElement, TabGroupProps>('sl-tab-group', SlTabGroup, [SlIcon, SlIconButton]);

export type TabPanelProps = HTMLAttributes<any> & Pick<SlTabPanel, 'active' | 'name'>;
export type TabPanelElement = TabPanelProps;
export const TabPanel = asComponent<SlTabPanel, TabPanelElement, TabPanelProps>('sl-tab-panel', SlTabPanel, []);

export type TagProps = HTMLAttributes<any> & Pick<SlTag, 'clearable' | 'pill' | 'size' | 'type'>;
export type TagElement = TagProps;
export const Tag = asComponent<SlTag, TagElement, TagProps>('sl-tag', SlTag, [SlIcon, SlIconButton]);

export type TextareaProps = HTMLAttributes<any> & Pick<SlTextarea, 'autocapitalize' | 'autocomplete' | 'autocorrect' | 'autofocus' | 'disabled' | 'helpText' | 'inputmode' | 'invalid' | 'label' | 'maxlength' | 'minlength' | 'name' | 'pattern' | 'placeholder' | 'readonly' | 'required' | 'resize' | 'rows' | 'size' | 'spellcheck' | 'value'>;
export type TextareaElement = TextareaProps & Pick<SlTextarea, 'blur' | 'focus' | 'reportValidity' | 'select' | 'setCustomValidity' | 'setRangeText' | 'setSelectionRange'>;
export const Textarea = asComponent<SlTextarea, TextareaElement, TextareaProps>('sl-textarea', SlTextarea, []);

export type TooltipProps = HTMLAttributes<any> & Pick<SlTooltip, 'content' | 'disabled' | 'distance' | 'open' | 'placement' | 'skidding' | 'trigger'>;
export type TooltipElement = TooltipProps & Pick<SlTooltip, 'hide' | 'show'>;
export const Tooltip = asComponent<SlTooltip, TooltipElement, TooltipProps>('sl-tooltip', SlTooltip, []);

