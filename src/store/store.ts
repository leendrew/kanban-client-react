import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { authReducer } from './auth';
import { api, envConfig, reducerKey } from '@/config';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [reducerKey.auth]: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  devTools: envConfig.isDev,
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useDispatch = useReduxDispatch<AppDispatch>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
