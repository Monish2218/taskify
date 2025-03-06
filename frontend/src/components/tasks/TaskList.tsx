import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EditTaskModal } from "./EditTaskModal"
import { Task } from "@/types"
import { taskService } from "@/services/taskService"

interface TaskListProps {
  readonly projectId?: string
}

export function TaskList({ projectId }: TaskListProps) {
  console.log(projectId);
  const [tasks, setTasks] = useState<Task[]>()

  const [editingTask, setEditingTask] = useState<Task | null>(null)

  const {data} = useQuery({
    queryKey: ['tasks'],
    queryFn: taskService.getTasks,
  })
  
  useEffect(() => {
    if (data) {
      setTasks(data);
    }
  }, [data]);

  const handleStatusChange = (taskId: string, completed: boolean) => {
    setTasks((prevTasks) =>
      prevTasks?.map((task) => (task.id === taskId ? { ...task, status: completed ? "completed" : "todo" } : task)),
    )
  }

  const handleEditTask = (task: Task) => {
    setEditingTask(task)
  }

  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks?.filter((task) => task.id !== taskId))
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
          {tasks?.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                <Checkbox
                  checked={task.status === "completed"}
                  onCheckedChange={(checked) => handleStatusChange(task.id, checked as boolean)}
                />
              </TableCell>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.priority}</TableCell>
              <TableCell>{new Date(task.dueDate as string).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</TableCell>
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
            setTasks((prevTasks) => prevTasks?.map((task) => (task.id === updatedTask.id ? updatedTask : task)))
            setEditingTask(null)
          }}
        />
      )}
    </>
  )
}

