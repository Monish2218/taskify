import { useParams } from "react-router-dom"
import { DashboardLayout } from "@/components/layout/DashboardLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TaskList } from "@/components/tasks/TaskList"

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>()

  // TODO: Fetch project details using the id

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Project Name</h1>
          <Button>Edit Project</Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>Key information about the project</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold">Description</h3>
                <p>Project description goes here...</p>
              </div>
              <div>
                <h3 className="font-semibold">Status</h3>
                <p>Active</p>
              </div>
              <div>
                <h3 className="font-semibold">Start Date</h3>
                <p>January 1, 2023</p>
              </div>
              <div>
                <h3 className="font-semibold">Due Date</h3>
                <p>December 31, 2023</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Tabs defaultValue="tasks">
          <TabsList>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
          </TabsList>
          <TabsContent value="tasks">
            <Card>
              <CardHeader>
                <CardTitle>Project Tasks</CardTitle>
                <CardDescription>Manage tasks for this project</CardDescription>
              </CardHeader>
              <CardContent>
                <TaskList projectId={id} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="team">
            <Card>
              <CardHeader>
                <CardTitle>Project Team</CardTitle>
                <CardDescription>Manage team members for this project</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add team management component here */}
                <p>Team management coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="files">
            <Card>
              <CardHeader>
                <CardTitle>Project Files</CardTitle>
                <CardDescription>Manage files for this project</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Add file management component here */}
                <p>File management coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  )
}

