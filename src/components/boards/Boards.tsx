import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import type { DropResult } from 'react-beautiful-dnd';
import { Stack } from '@mui/material';
import { useSelector } from '@/store';
import { useGetAllBoardsQuery } from '@/store/boards';
import { Column, ColumnSkeleton } from './column';
import { Droppable } from '@/components';

const COLUMNS_COUNT = 4;

// ! REFACTOR: move data fetching to one lvl up (widgets), add prop boards: Board[];

export function Boards() {
  const user = useSelector((state) => state.auth.user!);
  const { data: boards = [], isLoading } = useGetAllBoardsQuery(user.id);

  const onDragEnd = ({ source, destination, type }: DropResult) => {
    console.log('drop result', { source, destination, type });
  };

  if (isLoading) {
    return (
      <>
        <Stack
          sx={{
            overflowX: 'auto',
          }}
          direction="row"
          gap={1}
        >
          {Array.from({ length: COLUMNS_COUNT }).map((_, idx) => (
            <React.Fragment key={idx}>
              <ColumnSkeleton />
            </React.Fragment>
          ))}
        </Stack>
      </>
    );
  }

  if (!boards.length) {
    return <>No Boards</>;
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" type="column" direction="horizontal">
          {(provided) => (
            <Stack
              sx={{
                overflowX: 'auto',
              }}
              direction="row"
              gap={1}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {boards.map((board) => (
                <Column key={board.id} {...board} />
              ))}
              {provided.placeholder}
            </Stack>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
