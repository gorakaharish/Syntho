import mongoose from "mongoose";

 const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://admin:97bK8ILq2ivYlbsR@cluster0.eztyyxw.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;