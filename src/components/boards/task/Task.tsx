import { Draggable } from 'react-beautiful-dnd';
import { Stack, Typography } from '@mui/material';
import { DragHandle } from '@/components';
import { Sheet } from '@/components/ui';
import type { Task as TaskModel } from '@/store/tasks';

interface TaskProps extends TaskModel {}

export function Task({ id, name, isCompleted, index }: TaskProps) {
  const taskDraggableId = id.toString() + 'task';

  return (
    <>
      <Draggable
        draggableId={taskDraggableId}
        index={index}
      >
        {(provided) => (
          <>
            <Sheet
              sx={{ padding: '1rem' }}
              ref={provided.innerRef}
              {...provided.draggableProps}
            >
              <Stack
                direction="column"
                gap={1}
              >
                <DragHandle {...provided.dragHandleProps} />
                <Typography
                  component="span"
                  variant="body2"
                >
                  {name}
                </Typography>
                <div>{`${isCompleted}`}</div>
                <div>
                  {id} {index}
                </div>
              </Stack>
            </Sheet>
          </>
        )}
      </Draggable>
    </>
  );
}
