import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import multer from "multer";
import path from "path";
import fs from "fs";
import { ApiError } from "next/dist/server/api-utils/index.js";
// Function to create destination directory if it doesn't exist
const createDestinationDirectory = (destination) => {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true });
  }
};
// Multer configuration for file uploads
const uploadProductFiles = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      if (file.fieldname === "productImage") {
        const destination = "./public/temp/images";
        createDestinationDirectory(destination);
        cb(null, destination);
      } else if (file.fieldname === "catalogue") {
        const destination = "./public/temp/catalogs";
        createDestinationDirectory(destination);
        cb(null, destination);
      }
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "_" + uniqueSuffix + path.extname(file.originalname));
    },
  }),
}).fields([
  { name: "productImage", maxCount: 5 },
  { name: "catalogue", maxCount: 1 },
]);
// Handler for creating a new product
const createUser = expressAsyncHandler(async (req, res) => {
  try {
    const {
      name,
      category,
      description,
      actualPrice,
      sellingPrice,
      specification,
    } = req.body;
    // Validation checks...
    // Process product images
    const productImages = req.files.productImage.map((file) => file.path);
    // Process catalog file
    let catalogue = null;
    if (req.files.catalogue && req.files.catalogue.length > 0) {
      catalogue = req.files.catalogue[0].path;
    }
    // Create product with the uploaded files
    const product = await Product.create({
      name,
      category,
      productImage: productImages,
      description,
      catalogue,
      actualPrice,
      sellingPrice,
      specification: JSON.parse(specification), // Assuming specification is a JSON string
    });
    return res.status(200).json({
      status: "SUCCESS",
      message: "Product created",
      data: product,
    });
  } catch (err) {
    return res.status(500).send("Error:" + err);
  }
});
const updatepro = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    name,
    category,
    description,
    actualPrice,
    sellingPrice,
  } = req.body;
  const productImages = req.files?.productImage?.map(file => file.path) || [];
  const catalogue = req.files?.catalogue?.[0]?.path || null;
  let specification;
  try {
    specification = JSON.parse(req.body.specification);
  } catch (error) {
    console.log(error)
  }
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const updatedProductData = {
      name,
      category,
      productImage: productImages.length > 0 ? productImages : product.productImage,
      description,
      catalogue: catalogue || product.catalogue,
      actualPrice,
      sellingPrice,
      specification,
    };

    const updatedProduct = await Product.findByIdAndUpdate(id, updatedProductData, { new: true });

    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error.message);
    return res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
});

// fsdfsd

const getProducts = expressAsyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send("Error:" + err);
  }
});

const deleteproduct = expressAsyncHandler(async(req,res)=>{
  const {id} = req.params
  try{
    const productDel = await Product.findByIdAndDelete(id)
    return res.status(200).json(productDel)
  }
  catch (err) {
    res.status(500).send("Error:" + err);
  }
});
// get particular product
const singleproduct = expressAsyncHandler(async(req,res)=>{
  const {id} = req.params
  try{
    const productDel = await Product.findById(id)
    return res.status(200).json(productDel)
  }
  catch (err) {
    res.status(500).send("Error:" + err);
  }
})
export { uploadProductFiles, createUser, getProducts,deleteproduct,singleproduct,updatepro };