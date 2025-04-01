import {z} from 'zod';

export const createProjectSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  userId: z.string({required_error: 'User ID is required'}),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  status: z.enum(['not-started', 'in-progress', 'completed'],{
      invalid_type_error: 'Status must be one of the following: not-started, in-progress, completed',
  }).optional(),
  priority: z.enum(['low', 'medium', 'high'], {
      invalid_type_error: 'Priority must be one of the following: low, medium, high',
  }).optional(),
});

export const updateProjectSchema = createProjectSchema.partial();

export type CreateProjectInput = z.infer<typeof createProjectSchema>;
export type UpdateProjectInput = z.infer<typeof updateProjectSchema>;