import { useState, useEffect } from "react"
import { useAuth } from "../../contexts/AuthContext"
import Sidebar from "./Sidebar"
import TaskList from "./TaskList"
import TaskForm from "./TaskForm"
import ProjectList from "./ProjectList"
// import { Button } from "@/components/ui/button"

const Dashboard = () => {
  const { user } = useAuth()
  const [tasks, setTasks] = useState([])
  const [projects, setProjects] = useState([])
  const [isOrganization, setIsOrganization] = useState(false)

  useEffect(() => {
    // Fetch tasks and projects
    fetchTasks()
    fetchProjects()
    // Check if user is part of an organization
    checkOrganization()
  }, [])

  const fetchTasks = async () => {
    // Replace with actual API call
    const response = await fetch("/api/tasks")
    const data = await response.json()
    setTasks(data)
  }

  const fetchProjects = async () => {
    // Replace with actual API call
    const response = await fetch("/api/projects")
    const data = await response.json()
    setProjects(data)
  }

  const checkOrganization = async () => {
    // Replace with actual API call to check if user is part of an organization
    const response = await fetch("/api/user/organization")
    const data = await response.json()
    setIsOrganization(data.isOrganization)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto p-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
              <TaskForm onTaskAdded={fetchTasks} />
              <TaskList tasks={tasks} onTaskUpdated={fetchTasks} />
            </div>
            {isOrganization && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Projects</h2>
                <ProjectList projects={projects} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

