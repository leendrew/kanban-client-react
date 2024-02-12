import type {
  GetAllBoardsPayload,
  GetAllBoardsResponse,
  GetOneBoardByIdPayload,
  GetOneBoardByIdResponse,
  UpdateOneBoardByIdPayload,
  UpdateOneBoardByIdResponse,
  DeleteOneBoardByIdPayload,
  DeleteOneBoardByIdResponse,
} from './boards.types';
import { api, HTTP, PATHS } from '@/config';

export const boardsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBoards: builder.query<GetAllBoardsResponse, GetAllBoardsPayload>({
      query: (userId) => ({
        url: PATHS.boards,
        method: HTTP.get,
        params: {
          userId,
        },
      }),
    }),
    getOneBoardById: builder.query<GetOneBoardByIdResponse, GetOneBoardByIdPayload>({
      query: (id) => ({
        url: `${PATHS.boards}/${id}`,
        method: HTTP.get,
      }),
    }),
    updateOneBoardById: builder.mutation<UpdateOneBoardByIdResponse, UpdateOneBoardByIdPayload>({
      query: ({ id, ...data }) => ({
        url: `${PATHS.boards}/${id}`,
        method: HTTP.patch,
        body: data,
      }),
    }),
    deleteOneBoardById: builder.mutation<DeleteOneBoardByIdResponse, DeleteOneBoardByIdPayload>({
      query: (id) => ({
        url: `${PATHS.boards}/${id}`,
        method: HTTP.delete,
      }),
    }),
  }),
});

export const {
  useGetAllBoardsQuery,
  useGetOneBoardByIdQuery,
  useUpdateOneBoardByIdMutation,
  useDeleteOneBoardByIdMutation,
} = boardsApi;
