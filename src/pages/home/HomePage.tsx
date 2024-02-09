import { Box, Stack } from '@mui/material';
import { Sheet } from '@/components/ui';
import { Boards } from '@/components';

export function HomePage() {
  return (
    <>
      <Stack direction="column" gap={2}>
        <Box
          sx={{
            padding: '2rem 1rem',
          }}
        >
          <Sheet
            sx={{
              padding: '1.5rem 2rem',
            }}
          >
            <Boards />
          </Sheet>
        </Box>
      </Stack>
    </>
  );
}
