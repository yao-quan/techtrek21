import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    project_id: {
      type: String,
      required: true,
    },
    category_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    created_by: {
      type: String,
      required: true,
    },
    updated_by: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("expenses", ExpenseSchema);
