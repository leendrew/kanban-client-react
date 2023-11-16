import { Link } from 'react-router-dom';
import { Box, Container, Stack } from '@mui/material';
import { Button } from '@ui';
import { useDispatch, useSelector } from '@/store';
import { authActions } from '@/store/auth';
import { PATHS } from '@/config';
import Logo from '@/assets/logo.svg?react';

export function Header() {
  const dispatch = useDispatch();
  const isAuth = useSelector((store) => !!store.auth.user);

  const onLogoutClick = () => {
    dispatch(authActions.logout());
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          minHeight: '4rem',
          borderBottom: '0.0625rem solid var(--border-color--main)',
        }}
      >
        <Container sx={{ height: '100%' }}>
          <Stack
            sx={{ height: '100%' }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link to={PATHS.home}>
              <Box sx={{ width: 130, height: 32 }}>
                <Logo style={{ width: '100%', height: '100%' }} />
              </Box>
            </Link>
            {isAuth && (
              <Link to={PATHS.auth.login}>
                <Button color="error" variant="text" onClick={onLogoutClick}>
                  Logout
                </Button>
              </Link>
            )}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
