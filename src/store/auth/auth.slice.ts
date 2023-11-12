import { createSlice } from '@reduxjs/toolkit';
import type { AuthState, AuthResponse } from './auth.types';
import { authApi } from './auth.api';
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
    setState(state, { payload }) {
      setAuthState(state, payload);
    },
    logout() {
      localStorage.setItem(reducerKey.auth, '');
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.register.matchFulfilled, (state, { payload }) => {
        setAuthState(state, payload);
      })
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, { payload }) => {
        setAuthState(state, payload);
      })
      .addMatcher(authApi.endpoints.refresh.matchFulfilled, (state, { payload }) => {
        setAuthState(state, payload);
      });
  },
});

function setAuthState(state: AuthState, payload: AuthResponse) {
  localStorage.setItem(reducerKey.auth, JSON.stringify(payload));
  state.user = payload.user;
  state.tokens = payload.tokens;
}

export const { actions: authActions, reducer: authReducer } = authSlice;
