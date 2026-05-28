import express from "express";
import protectAdmin from "../middleware/authMiddleware.js";
import { getDashboardStats } from "../controllers/dashboardController.js";

const router = express.Router();

router.get("/", protectAdmin, getDashboardStats);

export default router;
