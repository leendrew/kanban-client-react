import { Stack, Typography } from '@mui/material';
import { Sheet } from '@ui';
import { Task } from '../task';
import type { Board as BoardModel } from '@/store/boards';

// interface ColumnProps {
//   tasks: TaskModel[] | [];
// }
type ColumnProps = BoardModel;

export function Column({ name, tasks, index }: ColumnProps) {
  return (
    <>
      <Sheet
        sx={{
          padding: '0.5rem',
          minWidth: '22rem',
        }}
        type="surface"
      >
        <Stack direction="column" gap={1}>
          <Typography
            component="h3"
            variant="subtitle2"
            textTransform="uppercase"
            sx={{
              marginTop: '0.5rem',
              paddingLeft: '0.5rem',
            }}
          >
            {name}
          </Typography>
          {index}
          {!tasks.length && <div>No tasks :(</div>}
          {!!tasks.length && tasks.map((task) => <Task key={task.id} {...task} />)}
        </Stack>
      </Sheet>
    </>
  );
}
