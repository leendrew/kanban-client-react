import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { config } from '@/config';
import { AUTH_KEY } from './constants';
import type { RootState } from './store';

const baseUrl = config.isDev
  ? 'http://localhost:8080/api'
  : 'https://kanban-server-nest.onrender.com/api';

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const storageData = window.localStorage.getItem(AUTH_KEY);
    if (!storageData) {
      return headers;
    }

    const token =
      (getState() as RootState).auth.tokens?.access || JSON.parse(storageData).tokens.access;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  endpoints: () => ({}),
});
