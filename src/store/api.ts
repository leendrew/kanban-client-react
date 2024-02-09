import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import type { RootState } from './store';
import { authActions } from './auth/auth.slice';
import type { AuthResponse } from './auth/auth.types';
import { HTTP, HTTP_STATUS } from './constants';
import { envConfig, PATHS } from '@/config';

const baseQuery = fetchBaseQuery({
  baseUrl: envConfig.apiUrl,
  prepareHeaders: (headers, { getState }) => {
    const tokens = (getState() as RootState).auth.tokens;
    if (tokens) {
      headers.set('Authorization', `Bearer ${tokens.access}`);
    }

    return headers;
  },
});

export const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    if (result.error.status === HTTP_STATUS.unauthorized) {
      const authState = (api.getState() as RootState).auth;
      const tokens = authState.tokens;
      if (!tokens) {
        return result;
      }

      /**
       * Because import anything from ./auth/auth.api.ts cause cycle import
       */
      const response = await baseQuery(
        {
          url: PATHS.auth.refresh,
          method: HTTP.post,
          body: { refreshToken: tokens.refresh },
        },
        api,
        extraOptions,
      );

      if (response.data) {
        api.dispatch(authActions.setState(response.data as AuthResponse));

        return baseQuery(args, api, extraOptions);
      }

      api.dispatch(authActions.logout());
    } else {
      const message =
        (result.error?.data as { message?: string })?.message || 'Something went wrong';
      toast.error(message);
      console.log('@error api', result.error.data, message);
    }
  }

  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});
