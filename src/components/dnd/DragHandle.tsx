import { Box } from '@mui/material';
import type { BoxProps } from '@mui/material';
import { DragIndicator as DragIndicatorIcon } from '@mui/icons-material';

interface DragHandleProps extends BoxProps {
  size?: 'small' | 'medium' | 'large';
}

export function DragHandle({ size = 'medium', ...props }: DragHandleProps) {
  const sizeType = {
    small: {
      width: '1rem',
      height: '1rem',
    },
    medium: {
      width: '1.5rem',
      height: '1.5rem',
    },
    large: {
      width: '2rem',
      height: '2rem',
    },
  }[size];

  return (
    <>
      <Box
        sx={{
          ...sizeType,
        }}
        {...props}
      >
        <DragIndicatorIcon
          sx={{
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
    </>
  );
}
