import type {
  UpdateOneTaskByIdPayload,
  UpdateOneTaskByIdResponse,
  DeleteOneTaskByIdPayload,
  DeleteOneTaskByIdResponse,
} from './tasks.types';
import { api, HTTP, PATHS } from '@/config';

export const tasksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateOneTaskById: builder.mutation<UpdateOneTaskByIdResponse, UpdateOneTaskByIdPayload>({
      query: ({ id, ...data }) => ({
        url: `${PATHS.tasks}/${id}`,
        method: HTTP.patch,
        body: data,
      }),
    }),
    deleteOneTaskById: builder.mutation<DeleteOneTaskByIdResponse, DeleteOneTaskByIdPayload>({
      query: (id) => ({
        url: `${PATHS.tasks}/${id}`,
        method: HTTP.delete,
      }),
    }),
  }),
});
