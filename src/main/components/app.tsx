import { define, h } from 'js-element'
import { Designer } from './designer'
import { Showcases } from './showcases'
import { unserializeCustomization } from '../theming/theme-utils'

// === components ====================================================

const data = location.hash
  ? unserializeCustomization(location.hash.substr(1))
  : null

export const App = define({
  name: 'sx-app'
}).main(() => {
  return () => (
    <div class="app">
      <Designer
        initialBaseThemeId={data?.baseThemeId}
        initialCustomizing={data?.customizing}
      >
        <div slot="showcases">
          <Showcases />
        </div>
      </Designer>
    </div>
  )
})
