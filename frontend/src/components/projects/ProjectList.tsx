import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EditProjectModal } from "./EditProjectModal"

interface Project {
  id: string
  name: string
  description: string
  status: "active" | "completed" | "on-hold"
  dueDate: string
}

export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "Website Redesign",
      description: "Redesign the company website with a modern look and feel",
      status: "active",
      dueDate: "2023-08-31",
    },
    {
      id: "2",
      name: "Mobile App Development",
      description: "Develop a new mobile app for customer engagement",
      status: "active",
      dueDate: "2023-09-30",
    },
    {
      id: "3",
      name: "Data Migration",
      description: "Migrate data from legacy systems to the new platform",
      status: "completed",
      dueDate: "2023-06-15",
    },
  ])

  const [editingProject, setEditingProject] = useState<Project | null>(null)

  const handleEditProject = (project: Project) => {
    setEditingProject(project)
  }

  const handleDeleteProject = (projectId: string) => {
    setProjects((prevProjects) => prevProjects.filter((project) => project.id !== projectId))
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center">
                <Badge>{project.status}</Badge>
                <span>Due: {project.dueDate}</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link to={`/dashboard/projects/${project.id}`}>View Details</Link>
              </Button>
              <div>
                <Button variant="ghost" onClick={() => handleEditProject(project)}>
                  Edit
                </Button>
                <Button variant="ghost" onClick={() => handleDeleteProject(project.id)}>
                  Delete
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      {editingProject && (
        <EditProjectModal
          project={editingProject}
          isOpen={!!editingProject}
          onClose={() => setEditingProject(null)}
          onSave={(updatedProject) => {
            setProjects((prevProjects) =>
              prevProjects.map((project) => (project.id === updatedProject.id ? updatedProject : project)),
            )
            setEditingProject(null)
          }}
        />
      )}
    </>
  )
}

