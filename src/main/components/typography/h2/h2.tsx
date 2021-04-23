import { ReactNode } from 'react'
import './h2.css'

// === exports =======================================================

export { H2 }

// === components ====================================================

type H2Props = {
  children?: ReactNode
}

function H2({ children }: H2Props) {
  return () => <h2 className="h2">{children}</h2>
}
