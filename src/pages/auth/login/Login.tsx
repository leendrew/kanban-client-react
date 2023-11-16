import { Container, Box } from '@mui/material';
import { Sheet } from '@ui';
import { LoginForm } from '@/components';

export function Login() {
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
            <LoginForm />
          </Sheet>
        </Box>
      </Container>
    </>
  );
}
