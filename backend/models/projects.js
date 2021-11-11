const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("projects", ProjectSchema);
