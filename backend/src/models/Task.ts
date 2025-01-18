import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project"},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dueDate: { type: Date },
});

export default mongoose.model("Task", TaskSchema);
