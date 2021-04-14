import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities'
import { h, render } from 'js-element'
import { App } from './components/app/app'

registerIconLibrary('default', {
  resolver: (name) =>
    `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.36/dist/assets/icons/${name}.svg`,

  mutator: (svg) => svg.setAttribute('fill', 'currentColor')
})

render(
  <div class="sl-theme-default">
    <App />
  </div>,
  '#app'
)
