import mongoose from "mongoose";

const userSchem = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  dateOfBirth:{type:String}
});

const user = mongoose.model("users", userSchem);

export default user;
