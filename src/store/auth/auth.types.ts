import type { User } from '../users';

export interface Tokens {
  access: string;
  refresh: string;
}

export interface AuthState {
  user: User | null;
  tokens: Tokens | null;
}

export interface LoginPayload {
  login: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  tokens: Tokens;
}

export type LoginResponse = AuthResponse;

export interface RegisterPayload {
  login: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export type RegisterResponse = AuthResponse;

export interface RefreshPayload {
  refreshToken: Tokens['refresh'];
}

export type RefreshResponse = AuthResponse;
