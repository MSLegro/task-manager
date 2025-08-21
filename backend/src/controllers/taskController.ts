import { Request, Response } from "express";
import { TaskService } from "../services/taskService";

export class TaskController {
  constructor(private service: TaskService) {}

  getAll = (req: Request, res: Response) => {
    res.json(this.service.getTasks());
  };

  create = (req: Request, res: Response) => {
    const { title, description, type } = req.body;
    const task = this.service.createTask(title, description, type);
    res.status(201).json(task);
  };

  update = (req: Request, res: Response) => {
    const { id } = req.params;
    const updated = this.service.updateTask(id, req.body);
    if (!updated) return res.status(404).json({ message: "Task not found" });
    res.json(updated);
  };

  delete = (req: Request, res: Response) => {
    const { id } = req.params;
    const deleted = this.service.deleteTask(id);
    if (!deleted) return res.status(404).json({ message: "Task not found" });
    res.status(204).send();
  };
}
