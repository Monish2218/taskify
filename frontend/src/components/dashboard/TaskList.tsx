import { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onTaskUpdated: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskUpdated }) => {
  const [expandedTask, setExpandedTask] = useState<string | null>(null);

  const handleTaskToggle = async (taskId: string, completed: boolean) => {
    try {
      // Replace with actual API call
      await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed }),
      });
      onTaskUpdated();
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      // Replace with actual API call
      await fetch(`/api/tasks/${taskId}`, { method: 'DELETE' });
      onTaskUpdated();
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li key={task.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
          <div className="flex items-center space-x-4">
            <Checkbox
              checked={task.completed}
              onCheckedChange={(checked) => handleTaskToggle(task.id, checked as boolean)}
            />
            <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.title}</span>
          </div>
          <div className="space-x-2">
            <Button variant="outline" size="sm" onClick={() => setExpandedTask(expandedTask === task.id ? null : task.id)}>
              {expandedTask === task.id ? 'Hide' : 'Details'}
            </Button>
            <Button variant="destructive" size="sm" onClick={() => handleDeleteTask(task.id)}>Delete</Button>
          </div>
          {expandedTask === task.id && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              {/* Add more task details here */}
              <p>Task ID: {task.id}</p>
              <p>Status: {task.completed ? 'Completed' : 'In Progress'}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

