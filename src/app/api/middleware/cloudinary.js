import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // Remove the locally saved temporary file
    fs.unlinkSync(localFilePath);
    return response; // Return the Cloudinary response
  } catch (error) {
    console.error("Error uploading to Cloudinary: ", error);
    // Handle the error appropriately, such as logging or returning null
    return null;
  }
};
