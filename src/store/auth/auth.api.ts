import { PATHS } from '@/config/router.config';
import { api } from '../api';
import type { RegisterPayload, RegisterResponse, LoginPayload, LoginResponse } from './auth.types';
import { HTTP } from '../constants';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, RegisterPayload>({
      query: (data) => ({
        url: PATHS.auth.register,
        method: HTTP.post,
        body: data,
      }),
    }),
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: (data) => ({
        url: PATHS.auth.login,
        method: HTTP.post,
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
