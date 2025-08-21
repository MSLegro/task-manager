import { Router } from "express";
import { TaskController } from "../controllers/taskController";
import { TaskService } from "../services/taskService";
import { TaskRepository } from "../repositories/taskRepository";
import { TaskObserver } from "../observers/taskObserver";

const router = Router();

// Inyección manual de dependencias
const repository = new TaskRepository();
const observer = new TaskObserver();

const service = new TaskService(repository, observer);
const controller = new TaskController(service);

router.get("/", controller.getAll);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
