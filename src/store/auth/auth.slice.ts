import { createSlice } from '@reduxjs/toolkit';
import type { AuthState, AuthResponse } from './auth.types';
import { authApi } from './auth.api';
import type { AuthState } from './auth.types';
import { reducerKey } from '../constants';

const initialState: AuthState = {
  user: null,
  tokens: null,
};

const authSlice = createSlice({
  name: reducerKey.auth,
  initialState,
  reducers: {
    init(state) {
      const authData = localStorage.getItem(reducerKey.auth);
      if (!authData) {
        return initialState;
      }

      const { user, tokens } = JSON.parse(authData);
      state.user = user;
      state.tokens = tokens;
    },
    logout() {
      localStorage.setItem(reducerKey.auth, '');
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload }) => {
        localStorage.setItem(reducerKey.auth, JSON.stringify(payload));
        state.user = payload.user;
        state.tokens = payload.tokens;
      })
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
        localStorage.setItem(reducerKey.auth, JSON.stringify(payload));
        state.user = payload.user;
        state.tokens = payload.tokens;
      });
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
