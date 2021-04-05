import { registerIconLibrary } from '@shoelace-style/shoelace/dist/utilities'
import { define, h } from 'js-element'
import { Designer } from './designer'
import { Showcases } from './showcases'
import { loadTheme } from '../theme-utils'
import { defaultTheme } from '../default-theme'

// === ugly stuff ====================================================

loadTheme('designer', defaultTheme)

registerIconLibrary('default', {
  resolver: (name) =>
    `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.36/dist/assets/icons/${name}.svg`,

  mutator: (svg) => svg.setAttribute('fill', 'currentColor')
})

// === App ===========================================================

export const App = define({
  name: 'sx-app'
})(() => {
  return () => (
    <Designer>
      <div slot="showcases">
        <Showcases />
      </div>
    </Designer>
  )
})
