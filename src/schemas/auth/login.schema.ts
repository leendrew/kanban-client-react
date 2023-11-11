import * as z from 'zod';
import { login, password } from '../shared.schema';

export const loginSchema = z.object({
  login,
  password,
});
