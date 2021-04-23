import { ReactNode } from 'react'
import './h3.css'

// === exports =======================================================

export { H3 }

// === components ====================================================

type H3Props = {
  children?: ReactNode
}

function H3({ children }: H3Props) {
  return () => <h3 className="h3">{children}</h3>
}
