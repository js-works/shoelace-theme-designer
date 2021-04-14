import { createMobxHooks } from 'js-element/utils'
import { Store } from './store'

// === exports =======================================================

export { useStoreProvider, useStore }

// === store hooks ===================================================

const [useStoreProvider, useStore] = createMobxHooks<Store>()
