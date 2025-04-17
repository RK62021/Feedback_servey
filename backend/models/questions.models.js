import mongoose from "mongoose";
const QuestionSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["multiple-choice", "text", "rating"],
    required: true,
  },
  options: [
    {
      type: String,
    },
  ],
});

export const Question = mongoose.model("Question", QuestionSchema);
