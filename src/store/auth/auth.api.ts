import type {
  RegisterPayload,
  RegisterResponse,
  LoginPayload,
  LoginResponse,
  RefreshPayload,
  RefreshResponse,
} from './auth.types';
import { api, HTTP, PATHS } from '@/config';

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
    refresh: builder.mutation<RefreshResponse, RefreshPayload>({
      query: (data) => ({
        url: PATHS.auth.refresh,
        method: HTTP.post,
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
