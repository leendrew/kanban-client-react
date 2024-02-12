import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { HTTP, HTTP_STATUS } from './constants';
import type { RootState } from '@/store';
import { authActions, authApi } from '@/store/auth';
import type { AuthResponse } from '@/store/auth';
import { envConfig, PATHS, reducerKey } from '@/config';

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
  const authState = (api.getState() as RootState).auth;
  const tokens = authState.tokens;
  console.log(authApi.endpoints.refresh.initiate({ refreshToken: tokens?.refresh || '' }));

  if (result.error) {
    if (result.error.status === HTTP_STATUS.unauthorized) {
      // state
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
  reducerPath: reducerKey.api,
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});
