export type TaskType = "normal" | "urgent" | "recurring";

export interface Task {
  id: string;
  title: string;
  description: string;
  type: TaskType;
  completed: boolean;
}
