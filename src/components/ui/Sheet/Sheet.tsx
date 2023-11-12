import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';

export function Sheet({ sx, children, ...rest }: BoxProps) {
  return (
    <Box
      sx={{
        borderRadius: '0.5rem',
        backgroundColor: 'var(--bg-color_main)',
        boxShadow: 'var(--box-shadow_main)',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
