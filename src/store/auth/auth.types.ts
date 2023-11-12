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

export interface LoginResponse {
  user: User;
  tokens: Tokens;
}

export interface RegisterPayload {
  login: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterResponse {
  user: User;
  tokens: Tokens;
}
