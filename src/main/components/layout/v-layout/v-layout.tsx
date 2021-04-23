import { ReactNode } from 'react'
import './v-layout.css'

// === exports =======================================================

export { VLayout }

// === constants =====================================================

const gaps: Record<Gap, string> = {
  tiny: '3px',
  small: '7px',
  medium: '18px',
  large: '36px'
}

// === types =========================================================

type Gap = 'tiny' | 'small' | 'medium' | 'large'

// === components ====================================================

type VLayoutProps = {
  gap?: Gap
  className?: string
  children?: ReactNode
}

function VLayout({ gap = 'tiny', className, children }: VLayoutProps) {
  const cssClass = 'v-layout' + (className ? ` ${className}` : '')

  return (
    <div className={cssClass} style={{ gap: gaps[gap] }}>
      {children}
    </div>
  )
}
