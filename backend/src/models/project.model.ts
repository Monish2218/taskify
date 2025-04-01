import {Schema, Document, model}from "mongoose";

export interface IProject extends Document {
  title: string;
  description?: string;
  userId: string;
  startDate?: Date;
  endDate?: Date;
  status: string;
  priority: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["not-started", "in-progress", "completed"],
    default: "not-started",
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low",
  },
},{
  timestamps: true,
});

const Project = model<IProject>("Project", ProjectSchema);

export default Project;
