import { Outlet, Link } from 'react-router-dom';
import { PATHS } from '@/router';
import { Box, Container, Stack } from '@mui/material';
import Logo from '@/assets/logo.svg?react';

export function MainLayout() {
  return (
    <>
      <Box
        component="header"
        sx={{
          minHeight: '4rem',
          borderBottom: '1px solid var(--border-color_main)',
        }}
      >
        <Container sx={{ height: '100%' }}>
          <Stack sx={{ height: '100%' }} direction="row" alignItems="center">
            <Link to={PATHS.home}>
              <Box sx={{ width: 130, height: 32 }}>
                <Logo style={{ width: '100%', height: '100%' }} />
              </Box>
            </Link>
          </Stack>
        </Container>
      </Box>
      <main className="main">
        <Outlet />
      </main>
    </>
  );
}
