export interface Task {
  id: number;
  name: string;
  isCompleted: boolean;
  index: number;
}

export type UpdateOneTaskByIdPayload = Partial<Task & { boardId: number }>;

export type UpdateOneTaskByIdResponse = Task;

export type DeleteOneTaskByIdPayload = Task['id'];

export type DeleteOneTaskByIdResponse = Task;
