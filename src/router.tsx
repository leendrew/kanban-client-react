import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { config, PATHS } from '@/config';
import { MainLayout, AuthLayout } from '@ui';
import { Home, Register, Login } from '@/pages';
import { WithAuth } from '@/hocs';

const privateRoutes = {
  index: false,
  element: <WithAuth />,
  children: [
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
  ],
} satisfies RouteObject;

const routes = [
  privateRoutes,
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
