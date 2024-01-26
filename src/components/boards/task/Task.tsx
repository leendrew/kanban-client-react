import { Sheet } from '@ui';
import type { Task as TaskModel } from '@/store/tasks';
import { Stack, Typography } from '@mui/material';

type TaskProps = TaskModel;

export function Task({ name, isCompleted, index }: TaskProps) {
  return (
    <>
      <Sheet sx={{ padding: '1rem' }}>
        <Stack direction="column" gap={1}>
          <Typography component="span" variant="body2">
            {name}
          </Typography>
          <div>{`${isCompleted}`}</div>
          <div>{index}</div>
        </Stack>
      </Sheet>
    </>
  );
}
