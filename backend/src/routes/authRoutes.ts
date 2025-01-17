import { Router } from "express";
import { login, register } from "../controllers/authController";
import { validateRequest } from "../middlewares/validate";
import { LoginSchema, RegisterSchema } from "../types";

const router = Router();

router.post("/register", validateRequest(RegisterSchema), register);
router.post("/login", validateRequest(LoginSchema), login);

export default router;