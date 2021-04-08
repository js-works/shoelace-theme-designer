import { define, h } from 'js-element'
import { Designer } from './designer'
import { Showcases } from './showcases'
import { Customizing } from '../theming/types'

// === components ====================================================

export const App = define({
  name: 'sx-app'
}).main(() => {
  return () => (
    <div class="app">
      <Designer
        onThemeChange={(ev: any) => {
          const base64String = serializeThemeConfig(
            ev.detail.baseThemId,
            ev.detail.customizing
          )

          location.hash = base64String
        }}
      >
        <div slot="showcases">
          <Showcases />
        </div>
      </Designer>
    </div>
  )
})

function serializeThemeConfig(baseThemeId: string, customizing: Customizing) {
  const data = {
    baseThemeId,
    customizing
  }

  return btoa(JSON.stringify(data))
}
