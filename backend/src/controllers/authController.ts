import { Request, Response } from "express"
import UserModel from "../models/User";
import bcryptjs from 'bcryptjs';

export const register = async (req:Request, res:Response) : Promise<void>=>{
    try {
        const {name, email, password} = req.body;
        
        const user = await UserModel.findOne({email});

        if(user){
            res.status(400).json({error: 'User already exists'});
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

export const login = async (req:Request, res:Response) : Promise<void>=>{
    try {
        const {email, password} = req.body;

        const user = await UserModel.findOne({email});
        if(!user){
            res.status(400).json({error: 'User does not exist'});
            return;
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch){
            res.status(400).json({error: 'Invalid password'});
            return;
        }
        res.status(200).json({message: 'Login successful'});
    } catch (error) {
        res.status(500).json({error: 'Error logging in'});
    }
}