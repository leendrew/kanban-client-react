import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { api } from './api';
import { authReducer } from './auth';
import { AUTH_KEY } from './constants';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [AUTH_KEY]: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useTypedDispatch = useDispatch<AppDispatch>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
