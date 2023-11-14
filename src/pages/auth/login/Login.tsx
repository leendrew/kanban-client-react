import { Link, useNavigate } from 'react-router-dom';
import { Container, Box, Stack, Typography, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from '@/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { Sheet, Button } from '@/components/ui';
import { useLoginMutation, authActions } from '@/store/auth';
import type { LoginPayload } from '@/store/auth';
import { loginSchema } from '@/schemas';
import { PATHS } from '@/config';
import Logo from '@/assets/logo.svg?react';

export function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginPayload>({
    mode: 'onSubmit',
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginPayload) => {
    try {
      const response = await login(data).unwrap();
      dispatch(authActions.setState(response));

      navigate(PATHS.home);
    } catch (e) {
      console.log('login error', e);
    }
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            padding: '2rem 0 0',
          }}
        >
          <Sheet
            sx={{
              maxWidth: '20rem',
              margin: '0 auto',
              padding: '2rem 1.5rem',
            }}
          >
            <Stack flexDirection="column" alignItems="center" gap={2}>
              <Stack
                component="form"
                sx={{ width: '100%' }}
                gap={2}
                onSubmit={handleSubmit(onSubmit)}
              >
                <Stack direction="column" alignItems="center">
                  <Box sx={{ width: 130, height: 32 }}>
                    <Logo style={{ width: '100%', height: '100%' }} />
                  </Box>
                  <Typography component="h1" variant="h5" sx={{ margin: '1rem 0' }}>
                    Login
                  </Typography>
                </Stack>
                <Controller
                  name="login"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Login"
                      variant="outlined"
                      size="small"
                      error={!!errors.login}
                      helperText={errors?.login?.message as string}
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      label="Password"
                      variant="outlined"
                      size="small"
                      error={!!errors.password}
                      helperText={errors?.password?.message as string}
                      {...field}
                    />
                  )}
                />
                <Button type="submit" variant="contained" loading={isLoading}>
                  Login
                </Button>
              </Stack>
              <Box>
                Didn't have account?&nbsp;
                <Link to={PATHS.auth.register}>Register</Link>
              </Box>
            </Stack>
          </Sheet>
        </Box>
      </Container>
    </>
  );
}
