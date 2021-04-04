import { define, h } from 'js-element'
import { Designer } from './designer'

export const App = define({
  name: 'sx-app'
})(() => {
  return () => <Designer />
})
