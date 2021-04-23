import { createContext } from 'react'
import { Store } from './store'

// === exports =======================================================

export { StoreCtx }

// === contexts ======================================================

const StoreCtx = createContext<Store | null>(null)
