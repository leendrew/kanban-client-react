import { Container, Box } from '@mui/material';
import { Sheet } from '@ui';
import { RegisterForm } from '@/components';

export function Register() {
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
            <RegisterForm />
          </Sheet>
        </Box>
      </Container>
    </>
  );
}
