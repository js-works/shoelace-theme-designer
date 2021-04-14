import { h } from 'js-element'
import { Designer } from '../designer/designer'
import { Showcases } from '../showcases/showcases'
import { unserializeCustomization } from '../../theming/theme-utils'

// === exports =======================================================

export { App }

// === components ====================================================

const data = location.hash
  ? unserializeCustomization(location.hash.substr(1))
  : null

if (location.href.indexOf('#') > -1) {
  location.hash = ''
}

function App() {
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
}
