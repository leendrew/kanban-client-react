import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { envConfig, PATHS } from '@/config';
import { MainLayout, AuthLayout } from '@/components/ui';
import { HomePage, RegisterPage, LoginPage } from '@/pages';
import { WithAuth } from '@/hocs';

// TODO: extract into /routes/!private!public.routes.tsx

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
          element: <HomePage />,
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
        element: <RegisterPage />,
      },
      {
        path: PATHS.auth.login,
        element: <LoginPage />,
      },
    ],
  },
] satisfies RouteObject[];

export const router = envConfig.isDev ? createBrowserRouter(routes) : createHashRouter(routes);
