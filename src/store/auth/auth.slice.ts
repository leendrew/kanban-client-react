import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AuthState, AuthResponse } from './auth.types';
import { reducerKey } from '../constants';

const initialState: AuthState = {
  user: null,
  tokens: null,
};

/**
 * Without extra reducer because
 * import anything from ./auth.api.ts
 * cause cycle import in ../api.ts
 */
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
    setState(state, { payload }: PayloadAction<AuthResponse>) {
      localStorage.setItem(reducerKey.auth, JSON.stringify(payload));
      state.user = payload.user;
      state.tokens = payload.tokens;
    },
    logout() {
      localStorage.setItem(reducerKey.auth, '');
      return initialState;
    },
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
