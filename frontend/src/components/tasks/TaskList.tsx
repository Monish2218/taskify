import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EditTaskModal } from "./EditTaskModal"
import { Task } from "@/types"
import { useAtom } from "jotai"
import { tasksAtom } from "@/stores/taskStore"

interface TaskListProps {
  readonly projectId?: string
}

export function TaskList({ projectId }: TaskListProps) {
  console.log(projectId);
  const [{data: tasks, isLoading, isError}, setTasks] = useAtom(tasksAtom)

  const [editingTask, setEditingTask] = useState<Task | null>(null)


  const handleEditTask = (task: Task) => {
    setEditingTask(task)
  }

  const handleDeleteTask = (taskId: string) => {
    setTasks();
    console.log('delete task', taskId);
  }

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks?.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{new Date(task.dueDate as string).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>{task.priority}</TableCell>
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
            setTasks();
            console.log('save task', updatedTask);
            setEditingTask(null)
          }}
        />
      )}
    </>
  )
}

