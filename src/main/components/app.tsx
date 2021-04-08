import { define, h } from 'js-element'
import { Designer } from './designer'
import { Showcases } from './showcases'

// === components ====================================================

export const App = define({
  name: 'sx-app'
}).main(() => {
  return () => (
    <div class="app">
      <Designer>
        <div slot="showcases">
          <Showcases />
        </div>
      </Designer>
    </div>
  )
})
