import type { ReactNode } from "react"
import { Sidebar } from "./Sidebar"

interface DashboardLayoutProps {
  readonly children: ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-6 md:ml-64">{children}</main>
    </div>
  )
}

