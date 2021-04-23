import { ReactNode } from 'react'
import './h4.css'

// === exports =======================================================

export { H4 }

// === components ====================================================

type H4Props = {
  children?: ReactNode
}

function H4({ children }: H4Props) {
  return <h4 className="h4">{children}</h4>
}
