import { useNavigate } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import { useDispatch } from '@/store';
import { Sheet } from '@/components/ui';
import { LoginForm } from '@/components';
import { useLoginMutation, authActions } from '@/store/auth';
import type { LoginSchema } from '@/schemas';
import { PATHS } from '@/config';

export function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: LoginSchema) => {
    const response = await login(data).unwrap();
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
            <LoginForm onSubmit={onSubmit} loading={isLoading} />
          </Sheet>
        </Box>
      </Container>
    </>
  );
}
