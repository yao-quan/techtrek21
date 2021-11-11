import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  user_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("projects", ProjectSchema);
