import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import { config } from '@/config';
import { MainLayout } from '@ui';
import { Home } from '@/pages';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
] satisfies RouteObject[];

export const router = config.isDev ? createBrowserRouter(routes) : createHashRouter(routes);
