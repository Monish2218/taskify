import { Link } from "react-router-dom"
import { LayoutDashboard, ListTodo, Users, Clock, Calendar, Bell, Shield, Zap } from "lucide-react"
import { useAtomValue } from "jotai";
import { Button } from "@/components/ui/button"
import { authAtom } from "@/stores/authStore";

const features = [
  {
    title: "Task Management",
    description:
      "Create, organize, and track tasks with ease. Set priorities, deadlines, and track progress in real-time.",
    icon: ListTodo,
  },
  {
    title: "Project Organization",
    description:
      "Group related tasks into projects. Manage multiple projects simultaneously with dedicated workspaces.",
    icon: LayoutDashboard,
  },
  {
    title: "Team Collaboration",
    description: "Work together seamlessly. Share tasks, assign responsibilities, and communicate within the platform.",
    icon: Users,
  },
  {
    title: "Time Tracking",
    description:
      "Monitor time spent on tasks and projects. Generate detailed reports for better productivity insights.",
    icon: Clock,
  },
  {
    title: "Calendar Integration",
    description: "Sync your tasks with calendar. Never miss a deadline with scheduled reminders.",
    icon: Calendar,
  },
  {
    title: "Real-time Notifications",
    description: "Stay updated with instant notifications for task assignments, updates, and approaching deadlines.",
    icon: Bell,
  },
  {
    title: "Secure Access",
    description: "Role-based access control ensures data security. Manage permissions at granular levels.",
    icon: Shield,
  },
  {
    title: "Performance Analytics",
    description: "Track productivity metrics and team performance with detailed analytics and reports.",
    icon: Zap,
  },
]

export default function Features() {
  const {user} = useAtomValue(authAtom);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Features that empower your productivity
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how Taskify can help you and your team achieve more. Our comprehensive suite of features is
            designed to streamline your workflow and boost productivity.
          </p>
          {user ? (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/dashboard">
                <Button size="lg">Get started</Button>
              </Link>
            </div>
            ) : (
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/register">
                <Button size="lg">Get started</Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg">
                  Log in
                </Button>
              </Link>
            </div>
        )}
          
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" />
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

