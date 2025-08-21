import { TaskRepository } from "../repositories/taskRepository";
import { TaskFactory } from "../factories/taskFactory";
import { TaskType } from "../models/Task";
import { TaskObserver } from "../observers/taskObserver";

export class TaskService {
  constructor(
    private repository: TaskRepository,
    private observer: TaskObserver
  ) {}

  createTask(title: string, description: string, type: TaskType) {
    const task = TaskFactory.createTask(title, description, type);
    const saved = this.repository.save(task);
    this.observer.notify("TASK_CREATED", saved);
    return saved;
  }

  getTasks() {
    return this.repository.findAll();
  }

  updateTask(id: string, data: any) {
    const updated = this.repository.update(id, data);
    if (updated) this.observer.notify("TASK_UPDATED", updated);
    return updated;
  }

  deleteTask(id: string) {
    const deleted = this.repository.delete(id);
    if (deleted) this.observer.notify("TASK_DELETED", { id });
    return deleted;
  }
}
