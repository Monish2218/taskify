import {Schema, model, Document} from "mongoose";

export interface ITask extends Document {
  title: string;
  description?: string;
  projectId?: string | Schema.Types.ObjectId;
  userId: string | Schema.Types.ObjectId;
  assignedTo?: string | Schema.Types.ObjectId;
  dueDate?: Date;
  status: string;
  priority: string;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new Schema<ITask>({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  projectId: {
    type: Schema.Types.ObjectId,
    ref: "Project",
    required: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  } as any,
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  dueDate: {
    type: Date,
    required: false,
  },
  status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending",
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low",
  },
},
{
  timestamps: true,
},);

const Task = model<ITask>("Task", TaskSchema);

export default Task;
