import { Link, useNavigate } from 'react-router-dom';
import { Container, Box, Stack, Typography, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PATHS } from '@/router';
import { Button } from '@/components/ui';
import { loginSchema } from '@/schemas';
import Logo from '@/assets/logo.svg?react';
import { useLoginMutation } from '@/store/auth';
import type { LoginPayload } from '@/store/auth';

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
  const navigate = useNavigate();

  const onSubmit = async (data: LoginPayload) => {
    console.log('login payload', data);
    try {
      const res = await login(data);
      console.log('login response', res);
      if (!('error' in res)) {
        navigate(PATHS.home);
      }
    } catch (e) {
      console.log('login error', e);
    }
  };

  return (
    <>
      <Container sx={{ height: '100%' }}>
        <Stack
          sx={{
            maxWidth: '20rem',
            padding: '2rem 1.5rem',
            margin: '2rem auto',
            borderRadius: '0.5rem',
            backgroundColor: 'var(--bg-color_main)',
            boxShadow: 'var(--box-shadow_main)',
          }}
          flexDirection="column"
          alignItems="center"
          gap={2}
        >
          <Stack component="form" sx={{ width: '100%' }} gap={2} onSubmit={handleSubmit(onSubmit)}>
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
      </Container>
    </>
  );
}