import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui';
import { NameField, LoginField, PasswordField, ConfirmPasswordField } from './fields';
import { registerSchema } from '@/schemas';
import type { RegisterSchema } from '@/schemas';
import { PATHS } from '@/config';
import Logo from '@/assets/logo.svg?react';

interface RegisterFormProps {
  onSubmit: (data: RegisterSchema) => void;
  loading?: boolean;
}

export function RegisterForm({ onSubmit, loading = false }: RegisterFormProps) {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      login: '',
      password: '',
      confirmPassword: '',
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
              variant="h5"
              sx={{ margin: '1rem 0' }}
            >
              Register
            </Typography>
          </Stack>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <NameField
                error={!!errors.name}
                helperText={errors?.name?.message}
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
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => (
              <ConfirmPasswordField
                error={!!errors.confirmPassword}
                helperText={errors?.confirmPassword?.message}
                {...field}
              />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            loading={loading}
          >
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
