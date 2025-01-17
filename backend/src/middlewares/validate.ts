import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validateRequest = (schema: z.ZodSchema) => {                                                                                                                    
  return async(req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
        if (error instanceof z.ZodError) {
            res.status(400).json({ errors: error.errors });
        } else {
            res.status(400).json({ error: 'Invalid request' });
        }
    }
  };
}