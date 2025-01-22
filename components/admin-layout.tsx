import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Button } from "@/components/ui/button"
import { Home, FileText, Briefcase, Code, User, Settings, LogOut } from "lucide-react"

const sidebarItems = [
  { name: "Dashboard", icon: Home, href: "/admin" },
  { name: "Home Content", icon: FileText, href: "/admin/home" },
  { name: "Projects", icon: Briefcase, href: "/admin/projects" },
  { name: "Skills", icon: Code, href: "/admin/skills" },
  { name: "Resume", icon: User, href: "/admin/resume" },
  { name: "Settings", icon: Settings, href: "/admin/settings" },
]

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`bg-card text-card-foreground w-64 ${isSidebarOpen ? "" : "-ml-64"} transition-all duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="mt-8">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-primary/10 hover:text-primary ${
                router.pathname === item.href ? "bg-primary/10 text-primary" : ""
              }`}
            >
              <item.icon className="w-5 h-5 mr-2" />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-card text-card-foreground shadow-md">
          <div className="flex items-center justify-between p-4">
            <Button variant="ghost" onClick={toggleSidebar}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/">
                <LogOut className="w-5 h-5 mr-2" />
                Exit Admin
              </Link>
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
          <div className="container mx-auto px-6 py-8">{children}</div>
        </main>
      </div>
    </div>
  )
}

