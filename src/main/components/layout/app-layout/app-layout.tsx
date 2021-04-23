import { ReactNode } from 'react'
import './app-layout.css'

// === exports =======================================================

export { AppLayout }

// === components ====================================================

type AppLayoutProps = {
  className?: string
  slotHeader?: ReactNode
  slotSidebar?: ReactNode
  slotMain?: ReactNode
}

function AppLayout({
  className,
  slotHeader,
  slotSidebar,
  slotMain
}: AppLayoutProps) {
  const cssClass = 'app-layout' + (className ? ` ${className}` : '')

  return (
    <div className={cssClass}>
      <header className="app-layout__header">{slotHeader}</header>
      <aside className="app-layout__sidebar">{slotSidebar}</aside>
      <main className="app-layout__main">{slotMain}</main>
    </div>
  )
}
