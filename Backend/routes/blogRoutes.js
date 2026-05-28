import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  getBlogBySlug,
  updateBlog,
  deleteBlog,
  getPublicBlogs,
} from "../controllers/blogController.js";
import protectAdmin from "../middleware/authMiddleware.js";
import upload from "../middleware/upload.js";

const router = express.Router();

// PUBLIC ROUTES (website ke liye)
router.get("/public", getPublicBlogs);
router.get("/slug/:slug", getBlogBySlug);

// ADMIN ROUTES (protected)
router.post("/", protectAdmin, upload.single("featuredImage"), createBlog);
router.get("/", protectAdmin, getAllBlogs);
router.get("/:id", protectAdmin, getBlogById);
router.put("/:id", protectAdmin, upload.single("featuredImage"), updateBlog);
router.delete("/:id", protectAdmin, deleteBlog);

export default router;
