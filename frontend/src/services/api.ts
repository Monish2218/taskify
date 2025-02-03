import axios from 'axios';
import { Project, Task } from '@/types';

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const projectService = {
  getProjects: () => api.get('/projects'),
  createProject: (project: Partial<Project>) => 
    api.post('/projects', project),
  getProjectDetails: (projectId: string) => 
    api.get(`/projects/${projectId}`),
};

export const taskService = {
  getTasks: (projectId?: string) => 
    api.get('/tasks', { params: { projectId } }),
  createTask: (task: Partial<Task>) => 
    api.post('/tasks', task),
  updateTaskStatus: (taskId: string, status: Task['status']) => 
    api.patch(`/tasks/${taskId}/status`, { status }),
};

export default api;