import mongoose from "mongoose";

const specSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    productImage: { type: [String], required: true }, // Change type to an array of strings
    description: { type: String, required: true },
    catalogue: { type: String }, // Catalogue can be optional, adjust as needed
    actualPrice: { type: String, required: true },
    sellingPrice: { type: String, required: true },
    specification: [specSchema],
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema); // Adjust model name

export default Product;
