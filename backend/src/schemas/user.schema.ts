import { Request } from 'express';
import z from 'zod';

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: 'Email is required',
    }).email('Invalid email address'),
    password: z.string({
      required_error: 'Password is required',
    }).min(8, 'Password must be at least 8 characters long'),
  }),
});

export const registerSchema = loginSchema.extend({
  body: loginSchema.shape.body.extend({
    name: z.string({
      required_error: 'Name is required',
    }).min(2, 'Name must be at least 2 characters long'),
  }),
});

export type User = z.infer<typeof userSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;

export interface AuthRequest extends Request {
    user?: {id: string, email: string};
}