import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
// import { ScrollArea } from "@/components/ui/scroll-area"
import { LayoutDashboard, ListTodo, FolderKanban, Settings, User } from "lucide-react"

const Sidebar = () => {
  const location = useLocation()

  const links = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Tasks", href: "/dashboard/tasks", icon: ListTodo },
    { name: "Projects", href: "/dashboard/projects", icon: FolderKanban },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Settings", href: "/settings", icon: Settings },
  ]

  return (
    <div className="pb-12 w-64">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Dashboard</h2>
          <div className="space-y-1">
            {links.map((link) => (
              <Button
                key={link.href}
                variant={location.pathname === link.href ? "secondary" : "ghost"}
                className={cn("w-full justify-start", location.pathname === link.href && "bg-accent")}
                asChild
              >
                <Link to={link.href}>
                  <link.icon className="mr-2 h-4 w-4" />
                  {link.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

