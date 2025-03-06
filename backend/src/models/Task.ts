import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project"},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  dueDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ["todo", "in-progress", "completed"], default: "todo" },
  priority: { type: String, enum: ["low", "medium", "high"], default: "low" },
});

export default mongoose.model("Task", TaskSchema);
