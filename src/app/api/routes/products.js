import express from "express";
import {
  createUser,
  deleteproduct,
  getProducts,
  singleproduct,
  updatepro,
  uploadProductFiles,
} from "../controllers/productcontroller.js";

const router = express.Router();
router.post("/addProduct", uploadProductFiles, createUser);
router.get("/getProducts", getProducts);
router.delete("/delete/:id",deleteproduct)
router.get("/singleproduct/:id",singleproduct)
router.put("/editproduct/:id",updatepro)

export default router;
