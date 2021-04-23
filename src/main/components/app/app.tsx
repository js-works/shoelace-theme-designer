import { Designer } from '../theme-designer/designer/designer'
import { Showcases } from '../showroom/showcases/showcases'
import { unserializeCustomization } from '../../theming/theme-utils'
import { Store } from '../../store/store'
import { StoreCtx } from '../../store/store-ctx'
import './app.css'

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
  const store = new Store()

  if (data?.baseThemeId) {
    store.setBaseThemeId(data.baseThemeId)
  }

  if (data?.customizing) {
    store.customize(data.customizing)
  }

  return (
    <div className="app">
      <StoreCtx.Provider value={store}>
        <Designer slotShowcases={<Showcases />} />
      </StoreCtx.Provider>
    </div>
  )
}
