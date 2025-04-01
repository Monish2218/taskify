import { Request, Response } from "express"
import Task from "../models/task.model";
import { AuthRequest } from "../schemas/user.schema";
import { CreateTaskInput, UpdateTaskInput } from "../schemas/task.schema";

export const createTask = async(req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.id as string;
        const task : CreateTaskInput = req.body;
        task.userId = userId;
        const createdTask = await Task.create(task);
        res.status(201).json(createdTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error creating task" });
    }
}

export const getUserTasks = async(req: AuthRequest, res: Response) => {
    try {
        const tasks = await Task.find({userId: req.user?.id});
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching User tasks" });
    }   
}

export const getProjectTasks = async(req: Request, res: Response) => {
    try {
        const tasks = await Task.find({projectId: req.params.projectId});
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching Project tasks" });
    }
}

export const getTask = async(req: Request, res: Response) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching task" });
    }
}

export const updateTask = async(req: Request, res: Response) => {
    try {
        const task : UpdateTaskInput = req.body;
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, task, {new: true});
        res.json(updatedTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error updating task" });
    }
}

export const deleteTask = async(req: Request, res: Response) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({message: "Task deleted"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error deleting task" });
    }
}