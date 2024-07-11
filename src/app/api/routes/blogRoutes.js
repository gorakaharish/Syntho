import express from "express";
import upload from "../config/multer.js";
import {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} from "../controllers/blogController.js";

const router = express.Router();

// Create a new blog post with image upload
router.post(
  "/",
  upload.array("images", 10), // Allows up to 10 images to be uploaded
  createBlog
);

// Get all blog posts
router.get("/", getBlogs);

// Get a single blog post by ID
router.get("/:id", getBlogById);

// Update a blog post by ID
router.put(
  "/:id",
  upload.array("images", 10), // Allows up to 10 images to be uploaded
  updateBlog
);

// Delete a blog post by ID
router.delete("/:id", deleteBlog);

export default router;
