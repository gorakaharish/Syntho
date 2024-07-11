// controllers/blogController.js
import expressAsyncHandler from "express-async-handler";
import Blog from "../models/blogModel.js";
// 

// Create a new blog post with image upload
export const createBlog = expressAsyncHandler(async (req, res) => {
  const { title, content, author } = req.body;
  let contentArray = JSON.parse(content); // Parse the content array

  // Add image URLs to the content array
  req.files.forEach((file, index) => {
    contentArray.push({
      type: "image",
      value: `/uploads/${file.filename}`
    });
  });

  const newBlog = new Blog({ title, content: contentArray, author });
  const createdBlog = await newBlog.save();
  res.status(201).json(createdBlog);
});

// Get all blog posts
export const getBlogs = expressAsyncHandler(async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

// Get a single blog post by ID
export const getBlogById = expressAsyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
});

// Update a blog post by ID
export const updateBlog = expressAsyncHandler(async (req, res) => {
  const { title, content, author } = req.body;
  let contentArray = JSON.parse(content); // Parse the content array

  // Add image URLs to the content array
  req.files.forEach((file, index) => {
    contentArray.push({
      type: "image",
      value: `/uploads/${file.filename}`
    });
  });

  const blog = await Blog.findById(req.params.id);
  if (blog) {
    blog.title = title || blog.title;
    blog.content = contentArray.length > 0 ? contentArray : blog.content;
    blog.author = author || blog.author;
    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
});

// Delete a blog post by ID
export const deleteBlog = expressAsyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog) {
    await blog.remove();
    res.json({ message: "Blog removed" });
  } else {
    res.status(404).json({ message: "Blog not found" });
  }
});
