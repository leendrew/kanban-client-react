import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { store } from '@/store';
import { authActions } from '@/store/auth';
import { muiConfig } from '@/config';
import { router } from '@/router';
import 'react-toastify/dist/ReactToastify.min.css';
import './index.css';

function bootstrap() {
  store.dispatch(authActions.init());

  createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={muiConfig}>
          <RouterProvider router={router} />
          <CssBaseline />
          <ToastContainer position="bottom-right" theme={muiConfig.palette.mode} draggable />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
  );
}
bootstrap();
