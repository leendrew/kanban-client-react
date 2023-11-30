export const HTTP = {
  get: 'get',
  post: 'post',
  put: 'put',
  patch: 'patch',
  delete: 'delete',
} as const;

export const HTTP_STATUS = {
  unauthorized: 401,
};

export const reducerKey = {
  auth: 'auth',
  boards: 'boards',
} as const;
