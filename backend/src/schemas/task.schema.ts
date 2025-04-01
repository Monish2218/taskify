import {z} from 'zod';

export const createTaskSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  projectId: z.string().optional(),
  userId: z.string({required_error: 'User ID is required'}),
  assignedTo: z.string().optional(),
  dueDate: z.date().optional(),
  status: z.enum(['pending', 'in-progress', 'completed'],{
    invalid_type_error: 'Status must be one of the following: pending, in-progress, completed',
  }).optional(),
  priority: z.enum(['low', 'medium', 'high'],{
    invalid_type_error: 'Priority must be one of the following: low, medium, high',
  }).optional(),
});

export const updateTaskSchema = createTaskSchema.partial();

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;