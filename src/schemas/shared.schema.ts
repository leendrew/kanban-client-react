import * as z from 'zod';

export const ERROR_MESSAGE = {
  required: 'This field is required',
  short: 'This field min length is:',
};

export const MIN_LENGTH_LOGIN = 3;
export const MIN_LENGTH_USER_NAME = 2;
export const MIN_LENGTH_PASSWORD = 4;

export const login = z
  .string({
    required_error: ERROR_MESSAGE.required,
  })
  .min(MIN_LENGTH_LOGIN, `${ERROR_MESSAGE.short} ${MIN_LENGTH_LOGIN}`);

export const password = z
  .string({
    required_error: ERROR_MESSAGE.required,
  })
  .min(MIN_LENGTH_PASSWORD, `${ERROR_MESSAGE.short} ${MIN_LENGTH_PASSWORD}`);
