import { Router } from "express";
import { checkuser } from "../controllers/AuthController.js";

const router = Router();

router.post("/check-user", checkuser);

export default router;
