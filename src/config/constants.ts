export const PATHS = {
  home: '/',
  auth: {
    register: '/auth/register',
    login: '/auth/login',
    refresh: '/auth/refresh',
  },
  boards: '/boards',
  tasks: '/tasks',
} as const;

export const HTTP = {
  get: 'get',
  post: 'post',
  put: 'put',
  patch: 'patch',
  delete: 'delete',
} as const;

export const HTTP_STATUS = {
  unauthorized: 401,
} as const;

export const reducerKey = {
  api: 'api',
  auth: 'auth',
  boards: 'boards',
} as const;
