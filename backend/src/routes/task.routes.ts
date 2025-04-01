import { Router } from "express";
import { authenticateToken } from "../middlewares/auth";
import validateRequest from "../middlewares/validateRequest";
import { createTask, deleteTask, getProjectTasks, getTask, getUserTasks, updateTask } from "../controllers/task.controller";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema";

const router = Router();

router.use(authenticateToken);

router.post("/", validateRequest(createTaskSchema), createTask);
router.get("/", getUserTasks);
router.get("/project/:projectId", getProjectTasks);
router.get("/:id", getTask);
router.put("/:id", validateRequest(updateTaskSchema), updateTask);
router.delete("/:id", deleteTask);

export default router;
