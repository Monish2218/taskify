import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date },
  status: { type: String, default: "active" },
  priority: { type: String, default: "low" },
});

export default mongoose.model("Project", ProjectSchema);
