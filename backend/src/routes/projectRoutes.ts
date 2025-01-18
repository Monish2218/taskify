import { Router } from "express";
import { authenticateToken } from "../middlewares/auth";
import { createProject, deleteProject, getProject, getProjects, updateProject } from "../controllers/projectController";

const router = Router();
router.use(authenticateToken);

router.get("/", getProjects);
router.post("/", createProject);
router.get("/:id", getProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;