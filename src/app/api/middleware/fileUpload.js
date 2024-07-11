import multer from "multer";
import path from "path";
import fs from "fs";

// Helper function to ensure the directory exists
const ensureDirExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Define storage for product images
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const imageDir = "./public/temp/images";
    ensureDirExists(imageDir);
    cb(null, imageDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "_" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Define storage for catalog
const catalogStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const catalogDir = "./public/temp/catalogs";
    ensureDirExists(catalogDir);
    cb(null, catalogDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "_" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Initialize multer with defined storage
export const imageUpload = multer({ storage: imageStorage });
export const catalogUpload = multer({ storage: catalogStorage });
