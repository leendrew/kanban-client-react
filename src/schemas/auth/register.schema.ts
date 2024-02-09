import * as z from 'zod';
import { login, password, ERROR_MESSAGE, MIN_LENGTH_USER_NAME } from '../shared.schema';

export const registerSchema = z
  .object({
    login,
    name: z
      .string({
        required_error: ERROR_MESSAGE.required,
      })
      .min(MIN_LENGTH_USER_NAME, `${ERROR_MESSAGE.short} ${MIN_LENGTH_USER_NAME}`),
    password,
    confirmPassword: z.string({
      required_error: ERROR_MESSAGE.required,
    }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export type RegisterSchema = z.infer<typeof registerSchema>;
