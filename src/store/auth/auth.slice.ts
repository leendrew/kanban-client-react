import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './auth.api';
import type { AuthState } from './auth.types';
import { AUTH_KEY } from '../constants';

const initialState: AuthState = {
  user: null,
  tokens: null,
};

const authSlice = createSlice({
  name: AUTH_KEY,
  initialState,
  reducers: {
    logout() {
      localStorage.setItem(AUTH_KEY, '');
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload }) => {
        window.localStorage.setItem(AUTH_KEY, JSON.stringify(payload));
        state = payload;
      })
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
        window.localStorage.setItem(AUTH_KEY, JSON.stringify(payload));
        state = payload;
      });
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
