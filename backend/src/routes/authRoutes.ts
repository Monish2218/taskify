import { Router } from "express";
import { getUser, login, register } from "../controllers/authController";
import validateRequest from "../middlewares/validateRequest";
import { loginSchema, registerSchema } from "../schemas/user.schema";
import { authenticateToken } from "../middlewares/auth";

const router = Router();

router.post("/register", validateRequest(registerSchema), register);
router.post("/login", validateRequest(loginSchema), login);
router.get("/user", authenticateToken, getUser);

export default router;