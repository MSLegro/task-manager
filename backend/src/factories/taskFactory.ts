import { Task, TaskType } from "../models/Task";
import { v4 as uuidv4 } from "uuid";

export class TaskFactory {
  static createTask(
    title: string,
    description: string,
    type: TaskType
  ): Task {
    return {
      id: uuidv4(),
      title,
      description,
      type,
      completed: false
    };
  }
}
