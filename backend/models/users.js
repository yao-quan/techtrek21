import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  appointment: {
    type: String,
    required: true,
  },
});

export default mongoose.model("users", UserSchema);
