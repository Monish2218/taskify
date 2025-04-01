import { Router } from "express";
import { authenticateToken } from "../middlewares/auth";
import validateRequest from "../middlewares/validateRequest";
import { createProject, deleteProject, getProject, getProjects, updateProject } from "../controllers/project.controller";
import { createProjectSchema, updateProjectSchema } from "../schemas/project.schema";

const router = Router();
router.use(authenticateToken);

router.get("/", getProjects);
router.post("/", validateRequest(createProjectSchema), createProject);
router.get("/:id", getProject);
router.put("/:id", validateRequest(updateProjectSchema), updateProject);
router.delete("/:id", deleteProject);

export default router;