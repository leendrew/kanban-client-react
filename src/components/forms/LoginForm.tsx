import { Link, useNavigate } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '@ui';
import { LoginField, PasswordField } from './fields';
import { useDispatch } from '@/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation, authActions } from '@/store/auth';
import type { LoginPayload } from '@/store/auth';
import { loginSchema } from '@/schemas';
import { PATHS } from '@/config';
import Logo from '@/assets/logo.svg?react';

// ! REFACTOR: move data fetching to one lvl up (widgets), add prop onSubmit: (data: LoginPayload) => void

export function LoginForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginPayload>({
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
      <Stack flexDirection="column" alignItems="center" gap={2}>
        <Stack component="form" sx={{ width: '100%' }} gap={2} onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" alignItems="center">
            <Link to={PATHS.home}>
              <Box sx={{ width: 130, height: 32 }}>
                <Logo style={{ width: '100%', height: '100%' }} />
              </Box>
            </Link>
            <Typography component="h1" variant="h5" sx={{ margin: '1rem 0' }}>
              Login
            </Typography>
          </Stack>
          <Controller
            name="login"
            control={control}
            render={({ field }) => (
              <LoginField
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
              <PasswordField
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
          Don't have account?&nbsp;
          <Link to={PATHS.auth.register}>Register</Link>
        </Box>
      </Stack>
    </>
  );
}
