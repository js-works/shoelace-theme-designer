import { ReactNode, StyleHTMLAttributes } from 'react'
import './h-layout.css'

// === exports =======================================================

export { HLayout }

// === constants =====================================================

const gaps: Record<Gap, string> = {
  tiny: '4px',
  small: '8px',
  medium: '20px',
  large: '40px',
  huge: '60px'
}

// === types =========================================================

type Align = 'top' | 'center' | 'bottom'
type Gap = 'tiny' | 'small' | 'medium' | 'large' | 'huge'

// === components ====================================================

type HLayoutProps = {
  align?: Align
  gap?: Gap
  wrap?: boolean
  className?: string
  children?: ReactNode
}

function HLayout({
  align = 'center',
  gap = 'tiny',
  wrap = false,
  className,
  children
}: HLayoutProps) {
  const alignItems =
    align === 'top' ? 'flex-start' : align === 'bottom' ? 'flex-end' : 'center'

  const flexWrap = wrap ? 'wrap' : 'nowrap'
  const cssClass = 'h-layout' + (className ? ` ${className}` : '')

  return (
    <div
      className={cssClass}
      style={{
        gap: gaps[gap],
        alignItems: alignItems,
        flexWrap: flexWrap
      }}
    >
      {children}
    </div>
  )
}
