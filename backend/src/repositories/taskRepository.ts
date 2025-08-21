import { Task } from "../models/Task";

export class TaskRepository {
  private tasks: Task[] = [];

  findAll(): Task[] {
    return this.tasks;
  }

  findById(id: string): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  save(task: Task): Task {
    this.tasks.push(task);
    return task;
  }

  update(id: string, updatedTask: Partial<Task>): Task | null {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index === -1) return null;
    this.tasks[index] = { ...this.tasks[index], ...updatedTask };
    return this.tasks[index];
  }

  delete(id: string): boolean {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index === -1) return false;
    this.tasks.splice(index, 1);
    return true;
  }
}
