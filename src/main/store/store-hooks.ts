import { useContext } from 'react'
import { Store } from './store'
import { StoreCtx } from './store-ctx'

// === exports =======================================================

export { useStore }

// === hooks =========================================================

function useStore(): Store {
  const store = useContext(StoreCtx)

  if (!store) {
    throw new Error('Store has not been provided')
  }

  return store
}
