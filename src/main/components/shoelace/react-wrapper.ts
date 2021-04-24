import {
  forwardRef,
  createElement,
  Component,
  FC,
  HTMLAttributes,
  Ref
} from 'react'

// Notes:
// - argument `elementClass` will be needed for proper typing
//   in future, also it makes sure that the element class will
//   never be tree-shaken away and the corresponding custom
//   element will be always be automatically registered
//
// - argument `dependencies` is used to make sure that all the
//   depending elements are properly registered and not tree-shaken
//   away
export function asComponent<T extends HTMLElement, P, M>(
  tagName: string,
  elementClass: { new (): T },
  dependencies?: any[]
): FC<
  Partial<P> &
    HTMLAttributes<any> &
    JSX.IntrinsicAttributes & {
      ref?: Ref<M>
    }
> {
  const compo = class extends Component<any> {
    private __element: HTMLElement | null = null

    static displayName = tagName + '/inner'

    componentDidMount() {
      this.__element && syncProps(this.__element, this.props)
    }

    componentDidUpdate() {
      this.__element && syncProps(this.__element, this.props)
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

        ref: (elem: any) => {
          this.__element = elem

          const forwardedRef = this.props.__forwardedRef

          if (forwardedRef) {
            if (typeof forwardedRef === 'function') {
              forwardedRef(elem)
            } else {
              forwardedRef.current = elem
            }
          }
        },

        style: this.props.style,
        children: this.props.children
      })
    }
  }

  const fn = (props: any, ref: any) => {
    return createElement(compo, { ...props, __forwardedRef: ref })
  }

  fn.displayName = tagName + '/outer'

  return forwardRef(fn)
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
