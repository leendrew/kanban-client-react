import { Skeleton } from '@mui/material';

export function ColumnSkeleton() {
  return (
    <>
      <Skeleton
        sx={{
          flexGrow: 1,
          minWidth: '22rem',
          height: 600,
        }}
        variant="rectangular"
      />
    </>
  );
}
