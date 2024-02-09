import * as z from 'zod';
import { login, password } from '../shared.schema';

export const loginSchema = z.object({
  login,
  password,
});

export type LoginSchema = z.infer<typeof loginSchema>;
