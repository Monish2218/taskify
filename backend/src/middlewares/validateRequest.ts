import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

const validateRequest = (schema: AnyZodObject) =>                                                                                                                   
  async(req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      return next();
    } catch (error) {
        if (error instanceof ZodError) {
          const formattedErrors = error.errors.map((err) => ({
            path: err.path.join('.'),
            message: err.message,
          }));
          res.status(400).json({
            status: "error",
            message: "Validation error",
            errors: formattedErrors,
          });
          return;
        }
        next(error);
    }
  };

export default validateRequest;