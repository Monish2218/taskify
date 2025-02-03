import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, ListTodo, FolderKanban, Settings, User, Menu, X, ChevronLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const sidebarItems = [
  { name: "Home", href: "/dashboard", icon: LayoutDashboard },
  { name: "Tasks", href: "/dashboard/tasks", icon: ListTodo },
  { name: "Projects", href: "/dashboard/projects", icon: FolderKanban },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  const toggleSidebar = () => setIsCollapsed(!isCollapsed)
  const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen)

  return (
    <>
      <Button variant="ghost" size="icon" className="fixed top-4 left-4 z-40 md:hidden" onClick={toggleMobileSidebar}>
        <Menu className="h-6 w-6" />
      </Button>

      <aside
        className={cn(
          "fixed top-0 left-0 z-30 h-screen bg-background transition-all duration-300 ease-in-out",
          isCollapsed ? "w-16" : "w-64",
          isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex h-full flex-col border-r">
          <div className="flex h-14 items-center border-b px-3">
            <Link to="/dashboard" className="flex items-center">
              <LayoutDashboard className="h-6 w-6" />
              {!isCollapsed && <span className="ml-2 text-lg font-semibold">Taskify</span>}
            </Link>
            <Button variant="ghost" size="icon" className="ml-auto hidden md:flex" onClick={toggleSidebar}>
              <ChevronLeft className={cn("h-4 w-4 transition-transform", isCollapsed && "rotate-180")} />
            </Button>
            <Button variant="ghost" size="icon" className="ml-auto md:hidden" onClick={toggleMobileSidebar}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <ScrollArea className="flex-1 py-2">
            <nav className="grid gap-1 px-2">
              {sidebarItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                    location.pathname === item.href && "bg-accent text-accent-foreground",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {!isCollapsed && <span className="ml-3">{item.name}</span>}
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </div>
      </aside>
    </>
  )
}

