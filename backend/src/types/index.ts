import { Request } from 'express';
import z from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export const RegisterSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters long' }),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
});

export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export interface AuthRequest extends Request {
    user?: {id: string, email: string};
}