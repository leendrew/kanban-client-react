import * as z from 'zod';

export const ERROR_MESSAGE_REQUIRED = 'This field is required';
export const ERROR_MESSAGE_SHORT = 'This field min length is:';

export const MIN_LENGTH_LOGIN = 3;
export const MIN_LENGTH_USER_NAME = 2;
export const MIN_LENGTH_PASSWORD = 4;

export const login = z
  .string({
    required_error: ERROR_MESSAGE_REQUIRED,
  })
  .min(MIN_LENGTH_LOGIN, `${ERROR_MESSAGE_SHORT} ${MIN_LENGTH_LOGIN}`);

export const password = z
  .string({
    required_error: ERROR_MESSAGE_REQUIRED,
  })
  .min(MIN_LENGTH_PASSWORD, `${ERROR_MESSAGE_SHORT} ${MIN_LENGTH_PASSWORD}`);
