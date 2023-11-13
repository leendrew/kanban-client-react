import { createSlice } from '@reduxjs/toolkit';
import { boardsApi } from './boards.api';
import type { BoardsState } from './boards.types';
import { reducerKey } from '../constants';
import { reorder } from '@/utils';

const initialState: BoardsState = {
  boards: [],
};

const boardsSlice = createSlice({
  name: reducerKey.boards,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(boardsApi.endpoints.getAllBoards.matchFulfilled, (state, { payload }) => {
      state.boards = payload;
    });
    builder.addMatcher(
      boardsApi.endpoints.updateOneBoardById.matchFulfilled,
      (state, { payload }) => {
        state.boards[payload.index] = payload;
        reorder(state.boards);
        state.boards.forEach((board) => reorder(board.tasks));
      },
    );
    builder.addMatcher(
      boardsApi.endpoints.deleteOneBoardById.matchFulfilled,
      (state, { payload }) => {
        state.boards = state.boards.filter((board) => board.id !== payload.id);
        reorder(state.boards);
      },
    );
  },
});

export const { actions: boardsActions, reducer: boardsReducer } = boardsSlice;
