import type { User } from '../users';

export interface Board {
  id: number;
  name: string;
  index: number;
}

export interface BoardsState {
  boards: Board[] | [];
}

export type GetAllBoardsPayload = User['id'];

export type GetAllBoardsResponse = Board[];

export type GetOneBoardByIdPayload = Board['id'];

export type GetOneBoardByIdResponse = Board;

export type UpdateOneBoardByIdPayload = Partial<Omit<Board, 'tasks'> & { userId: User['id'] }>;

export type UpdateOneBoardByIdResponse = Board;

export type DeleteOneBoardByIdPayload = Board['id'];

export type DeleteOneBoardByIdResponse = Board;
