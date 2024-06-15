import { Router } from "express";
import { registers, login } from "../controller/authcontroller.mjs";

const router = Router();
router.post("/register", registers);
router.post("/login", login);

export default router;
