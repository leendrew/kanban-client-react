import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui';
import { LoginField, PasswordField } from './fields';
import { loginSchema } from '@/schemas';
import type { LoginSchema } from '@/schemas';
import { PATHS } from '@/config';
import Logo from '@/assets/logo.svg?react';

interface LoginFormProps {
  onSubmit: (data: LoginSchema) => void;
  loading?: boolean;
}

export function LoginForm({ onSubmit, loading = false }: LoginFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const onFormSubmit = handleSubmit(onSubmit);

  return (
    <>
      <Stack
        flexDirection="column"
        alignItems="center"
        gap={2}
      >
        <Stack
          component="form"
          sx={{ width: '100%' }}
          gap={2}
          onSubmit={onFormSubmit}
        >
          <Stack
            direction="column"
            alignItems="center"
          >
            <Link to={PATHS.home}>
              <Box sx={{ width: 130, height: 32 }}>
                <Logo style={{ width: '100%', height: '100%' }} />
              </Box>
            </Link>
            <Typography
              component="h1"
              sx={{ margin: '1rem 0' }}
              variant="h5"
            >
              Login
            </Typography>
          </Stack>
          <Controller
            name="login"
            control={control}
            render={({ field }) => (
              <LoginField
                error={!!errors.login}
                helperText={errors?.login?.message}
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
                helperText={errors?.password?.message}
                {...field}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            loading={loading}
          >
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
