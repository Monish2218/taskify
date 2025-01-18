import { Response } from "express"
import { AuthRequest } from "../types";
import ProjectModel from "../models/Project";

export const getProjects = async (req:AuthRequest, res:Response)=> {
    try {
        const projects = await ProjectModel.find({userId : req.user?.id});
        res.json(projects);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error fetching projects"});
    }
}

export const getProject = async(req: AuthRequest, res: Response)=>{
    try {
        const project = await ProjectModel.findById(req.params.id);
        if(!project) {
            res.status(404).json({message:"Project not found"});
            return;
        }
        res.json(project);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error fetching project"});
    }
}

export const createProject = async(req:AuthRequest, res:Response)=>{
    try {
        const userId = req.user?.id;
        const project = req.body;
        project.userId = userId;
        const newProject = await ProjectModel.create(project);
        res.status(201).json(newProject);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error in creating project"});
    }
}

export const updateProject = async(req:AuthRequest, res:Response)=>{
    try {
        const updatedProject = await ProjectModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
        if(!updatedProject){
            res.status(404).json({message:"Project not found"});
            return;
        }
        res.status(200).json(updatedProject);
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error in updating project"});
    }
}

export const deleteProject = async(req: AuthRequest, res: Response)=>{
    try {
        const deletedProject = await ProjectModel.findByIdAndDelete(req.params.id);
        if(!deletedProject){
            res.status(404).json({message:"Project not found"});
            return;
        }
        res.status(200).json({message:"Project deleted successfully"});
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Error in deleting project"});
    }
}