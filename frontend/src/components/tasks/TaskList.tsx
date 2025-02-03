import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EditTaskModal } from "./EditTaskModal"

interface Task {
  id: string
  title: string
  status: "todo" | "in-progress" | "completed"
  priority: "low" | "medium" | "high"
  dueDate: string
}

interface TaskListProps {
  readonly projectId?: string
}

export function TaskList({ projectId }: TaskListProps) {
  console.log(projectId);
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Create wireframes",
      status: "completed",
      priority: "high",
      dueDate: "2023-06-30",
    },
    {
      id: "2",
      title: "Develop landing page",
      status: "in-progress",
      priority: "medium",
      dueDate: "2023-07-15",
    },
    {
      id: "3",
      title: "Write documentation",
      status: "todo",
      priority: "low",
      dueDate: "2023-07-31",
    },
  ])

  const [editingTask, setEditingTask] = useState<Task | null>(null)

  const handleStatusChange = (taskId: string, completed: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === taskId ? { ...task, status: completed ? "completed" : "todo" } : task)),
    )
  }

  const handleEditTask = (task: Task) => {
    setEditingTask(task)
  }

  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                <Checkbox
                  checked={task.status === "completed"}
                  onCheckedChange={(checked) => handleStatusChange(task.id, checked as boolean)}
                />
              </TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.priority}</TableCell>
              <TableCell>{task.dueDate}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" onClick={() => handleEditTask(task)}>
                  Edit
                </Button>
                <Button variant="ghost" size="sm" onClick={() => handleDeleteTask(task.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          isOpen={!!editingTask}
          onClose={() => setEditingTask(null)}
          onSave={(updatedTask) => {
            setTasks((prevTasks) => prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
            setEditingTask(null)
          }}
        />
      )}
    </>
  )
}

