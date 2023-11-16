import { Link, useNavigate } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { NameField, LoginField, PasswordField, ConfirmPasswordField } from './fields';
import { useDispatch } from '@/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@ui';
import { useRegisterMutation, authActions } from '@/store/auth';
import type { RegisterPayload } from '@/store/auth';
import { registerSchema } from '@/schemas';
import { PATHS } from '@/config';
import Logo from '@/assets/logo.svg?react';

// ! REFACTOR: move data fetching to one lvl up (widgets), add prop onSubmit: (data: RegisterPayload) => void

export function RegisterForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterPayload>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      login: '',
      password: '',
      confirmPassword: '',
    },
  });
  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterPayload) => {
    try {
      const response = await register(data).unwrap();
      dispatch(authActions.setState(response));

      navigate(PATHS.home);
    } catch (e) {
      console.log('register error', e);
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
              Register
            </Typography>
          </Stack>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <NameField
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
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <ConfirmPasswordField
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
    </>
  );
}
