import * as z from 'zod';
import {
  login,
  password,
  ERROR_MESSAGE_REQUIRED,
  ERROR_MESSAGE_SHORT,
  MIN_LENGTH_USER_NAME,
} from '../shared.schema';

export const registerSchema = z
  .object({
    login,
    name: z
      .string({
        required_error: ERROR_MESSAGE_REQUIRED,
      })
      .min(MIN_LENGTH_USER_NAME, `${ERROR_MESSAGE_SHORT} ${MIN_LENGTH_USER_NAME}`),
    password,
    confirmPassword: z.string({
      required_error: ERROR_MESSAGE_REQUIRED,
    }),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });
