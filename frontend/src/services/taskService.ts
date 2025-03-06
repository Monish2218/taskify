import { Task } from '../types';
import { api } from './api';

export const taskService = {
    getTasks: () => 
        api.get('/tasks').then(response => response.data as Task[]),
    createTask: (task: Partial<Task>) => 
        api.post('/tasks', task),
    updateTaskStatus: (taskId: string, status: Task['status']) => 
        api.patch(`/tasks/${taskId}/status`, { status }),
};