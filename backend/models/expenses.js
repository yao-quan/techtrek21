import { Timestamp } from "bson";
import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    project_id: {
      type: Number,
      required: true,
    },
    category_id: {
      type: Number,
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
