import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';

interface SheetProps extends BoxProps {
  type?: 'surface' | 'main';
}

export function Sheet({ type = 'main', sx, children, ...rest }: SheetProps) {
  const backgroundColor = {
    main: 'var(--bg-color_block--main)',
    surface: 'var(--bg-color_block--surface)',
  }[type];

  const boxShadow = {
    main: 'var(--box-shadow--main)',
    surface: '',
  }[type];

  return (
    <Box
      sx={{
        borderRadius: '0.375rem;',
        backgroundColor,
        boxShadow,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
