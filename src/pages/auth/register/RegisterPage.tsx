import { useNavigate } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import { useDispatch } from '@/store';
import { Sheet } from '@/components/ui';
import { RegisterForm } from '@/components';
import { useRegisterMutation, authActions } from '@/store/auth';
import type { RegisterSchema } from '@/schemas';
import { PATHS } from '@/config';

export function RegisterPage() {
  const [register, { isLoading }] = useRegisterMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterSchema) => {
    const response = await register(data).unwrap();
    dispatch(authActions.setState(response));
    navigate(PATHS.home);
  };

  return (
    <>
      <Container>
        <Box
          sx={{
            padding: '2rem 0',
          }}
        >
          <Sheet
            sx={{
              maxWidth: '20rem',
              margin: '0 auto',
              padding: '2rem 1.5rem',
            }}
          >
            <RegisterForm onSubmit={onSubmit} loading={isLoading} />
          </Sheet>
        </Box>
      </Container>
    </>
  );
}
