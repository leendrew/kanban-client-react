import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { store } from '@/store';
import { authActions } from '@/store/auth';
import { theme } from '@/config';
import { router } from '@/router';
import './index.css';

function bootstrap() {
  store.dispatch(authActions.init());

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
          <CssBaseline />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
  );
}
bootstrap();
