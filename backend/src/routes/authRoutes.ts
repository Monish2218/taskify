import { Router } from "express";
import { getUser, login, register } from "../controllers/authController";
import { validateRequest } from "../middlewares/validate";
import { LoginSchema, RegisterSchema } from "../types";
import { authenticateToken } from "../middlewares/auth";

const router = Router();

router.post("/register", validateRequest(RegisterSchema), register);
router.post("/login", validateRequest(LoginSchema), login);
router.get("/user", authenticateToken, getUser);

export default router;