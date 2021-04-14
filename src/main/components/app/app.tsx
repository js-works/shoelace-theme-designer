import { h } from 'js-element'
import { Designer } from '../designer/designer'
import { Showcases } from '../showcases/showcases'
import { unserializeCustomization } from '../../theming/theme-utils'
import { Store } from '../../store/store'
import { useStoreProvider } from '../../store/store-hooks'

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
  const store = useStoreProvider(new Store())

  if (data?.baseThemeId) {
    store.setBaseThemeId(data.baseThemeId)
  }

  if (data?.customizing) {
    store.customize(data.customizing)
  }

  return () => (
    <div class="app">
      <Designer>
        <div slot="showcases">
          <Showcases />
        </div>
      </Designer>
    </div>
  )
}
