import { Project } from '../types';
import { api } from './api';

export const projectService = {
  getProjects: () => api.get('/projects'),
  createProject: (project: Partial<Project>) => 
    api.post('/projects', project),
  getProjectDetails: (projectId: string) => 
    api.get(`/projects/${projectId}`),
};