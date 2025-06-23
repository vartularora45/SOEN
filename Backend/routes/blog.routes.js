import express from "express";
import { createBlog,getAllBlogs } from "../controller/blog.cantroller.js";

const router = express.Router();
router.post('/createBlog', createBlog);
router.get("/getAllBlogs", getAllBlogs);

export default router;