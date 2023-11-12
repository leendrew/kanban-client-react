import { Link, useNavigate } from 'react-router-dom';
import { Container, Box, Stack, Typography, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PATHS } from '@/config';
import { Button } from '@/components/ui';
import { registerSchema } from '@/schemas';
import Logo from '@/assets/logo.svg?react';
import { useRegisterMutation } from '@/store/auth';
import type { RegisterPayload } from '@/store/auth';

export function Register() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterPayload>({
    mode: 'onSubmit',
    resolver: zodResolver(registerSchema),
    defaultValues: {
      login: '',
      name: '',
      password: '',
      confirmPassword: '',
    },
  });
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterPayload) => {
    try {
      const res = await register(data);
      if (!('error' in res)) {
        navigate(PATHS.home);
      }
    } catch (e) {
      console.log('register error', e);
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
                Register
              </Typography>
            </Stack>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Name"
                  variant="outlined"
                  size="small"
                  error={!!errors.name}
                  helperText={errors?.name?.message as string}
                  {...field}
                />
              )}
            />
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
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  size="small"
                  error={!!errors.confirmPassword}
                  helperText={errors?.confirmPassword?.message as string}
                  {...field}
                />
              )}
            />
            <Button type="submit" variant="contained" loading={isLoading}>
              Register
            </Button>
          </Stack>
          <Box>
            Already have account?&nbsp;
            <Link to={PATHS.auth.login}>Login</Link>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
