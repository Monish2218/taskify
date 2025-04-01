import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import config from '../config';

interface AppError extends Error {
  statusCode?: number;
  status?: string;
  isOperational?: boolean;
}

const errorHandler : ErrorRequestHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    err.statusCode = err.statusCode ?? 500;
    err.status = err.status ?? 'error';

    console.error('ERROR 💥:', err);

    if (config.nodeEnv === 'production' && !err.isOperational) {
        res.status(500).json({
            status: 'error',
            message: 'Something went very wrong!',
        });
        return;
    }

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        ...(config.nodeEnv === 'development' && { stack: err.stack }),
    });
};

export default errorHandler;