import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { config } from '@/config';
import { MainLayout, AuthLayout } from '@ui';
import { Home, Register, Login } from '@/pages';

export const PATHS = {
  home: '/',
  auth: {
    register: '/auth/register',
    login: '/auth/login',
  },
};

const routes = [
  {
    path: PATHS.home,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    index: false,
    element: <AuthLayout />,
    children: [
      {
        path: PATHS.auth.register,
        element: <Register />,
      },
      {
        path: PATHS.auth.login,
        element: <Login />,
      },
    ],
  },
] satisfies RouteObject[];

export const router = config.isDev ? createBrowserRouter(routes) : createHashRouter(routes);
