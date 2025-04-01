import { Request, Response } from "express"
import UserModel from "../models/user.model";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AuthRequest, LoginInput, RegisterInput } from "../schemas/user.schema";

export const register = async (req:Request<{}, {}, RegisterInput>, res:Response) : Promise<void>=>{
    try {
        const {name, email, password} = req.body;
        
        const user = await UserModel.findOne({email});

        if(user){
            res.status(409).json({error: 'User already exists'});
            return;
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        await UserModel.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({message: 'User created successfully'});
    } catch (error) {
        res.status(500).json({error: 'Error creating User'});
    }
    
}

export const login = async (req:Request<{}, {}, LoginInput>, res:Response) : Promise<void>=>{
    try {
        const {email, password} = req.body;

        const user = await UserModel.findOne({email}).select('+password');
        if(!user){
            res.status(400).json({error: 'User does not exist'});
            return;
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            res.status(400).json({error: 'Invalid password'});
            return;
        }
        
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET ?? 'your-secret-key', {expiresIn: '1d'});
        res.status(200).json({token, user: {id: user._id, name: user.name, email: user.email, role: user.role}});
    } catch (error) {
        res.status(500).json({error: 'Error logging in'});
    }
}

export const getUser = async (req:AuthRequest, res:Response) : Promise<void>=>{
    try {
        const user = await UserModel.findById(req.user?.id).select('-password');
        if(!user){
            res.status(400).json({error: 'User not found'});
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: 'Error fetching User'});
    }
}