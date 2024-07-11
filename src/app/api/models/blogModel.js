// models/BlogModel.js
import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  value: { type: String, required: true } // Text content or image URL
});

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: [contentSchema],
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
