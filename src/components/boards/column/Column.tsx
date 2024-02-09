import { Draggable } from 'react-beautiful-dnd';
import { Stack, Typography } from '@mui/material';
import { Sheet } from '@/components/ui';
import { Droppable } from '@/components';
import { Task } from '../task';
import type { Board as BoardModel } from '@/store/boards';

interface ColumnProps extends BoardModel {}

export function Column({ id, name, tasks, index }: ColumnProps) {
  const columnDraggableId = id.toString() + 'column';

  return (
    <>
      <Draggable draggableId={columnDraggableId} index={index}>
        {(draggableProvided) => (
          <>
            <Sheet
              sx={{
                padding: '0.5rem',
                minWidth: '22rem',
                boxShadow: 'var(--box-shadow--main)',
              }}
              type="surface"
              ref={draggableProvided.innerRef}
              {...draggableProvided.draggableProps}
            >
              <Stack direction="column" gap={2}>
                <Typography
                  component="h3"
                  variant="subtitle2"
                  textTransform="uppercase"
                  sx={{
                    marginTop: '0.5rem',
                    paddingLeft: '0.5rem',
                  }}
                  {...draggableProvided.dragHandleProps}
                >
                  {name}
                </Typography>
                <Droppable direction="vertical" type="column" droppableId={columnDraggableId}>
                  {(provided) => (
                    <>
                      <Stack
                        direction="column"
                        gap={1}
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {index}
                        {!tasks.length && <div>No tasks :(</div>}
                        {!!tasks.length && tasks.map((task) => <Task key={task.id} {...task} />)}
                        {provided.placeholder}
                      </Stack>
                    </>
                  )}
                </Droppable>
              </Stack>
            </Sheet>
          </>
        )}
      </Draggable>
    </>
  );
}
