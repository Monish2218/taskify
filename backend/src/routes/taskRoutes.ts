import { Router } from "express";
import { authenticateToken } from "../middlewares/auth";
import { createTask, deleteTask, getProjectTasks, getTask, getUserTasks, updateTask } from "../controllers/taskController";

const router = Router();

router.use(authenticateToken);

router.post("/", createTask);
router.get("/", getUserTasks);
router.get("/project/:projectId", getProjectTasks);
router.get("/:id", getTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
