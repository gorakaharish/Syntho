import express from "express";
import next from "next";
import connectDB from "./config/db.js"; // Ensure this path is correct
import bodyParser from "body-parser";
import Product from "./routes/products.js";
import Auth from "./routes/auth.js";
import blogRoutes from "./routes/blogRoutes.js";
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
// Call connectDB function to establish MongoDB connection
connectDB();
app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  // Custom Express route
  server.use("/api", Product);
  server.use("/api", Auth);
  server.use("/api/blogs", blogRoutes);
  // Default catch-all handler to allow Next.js to handle all other routes
  server.all("*", (req, res) => {
    return handle(req, res);
  });
  server.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
  });
  server.listen(3001, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3001");
  });
});
