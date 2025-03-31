import dotenv from 'dotenv';
import path from 'path';

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
dotenv.config({ path: path.resolve(process.cwd(), envFile) });

const requiredEnvVars = ['PORT', 'MONGODB_URI', 'NODE_ENV', 'JWT_SECRET'];
requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
        console.error(`Error: Environment variable ${varName} is not set.`);
        process.exit(1);
    }
});

interface Config {
    port: number;
    mongoUri: string;
    nodeEnv: string;
    jwtSecret: string;
}

const config: Config = {
    port: parseInt(process.env.PORT ?? '5000', 10),
    mongoUri: process.env.MONGODB_URI!,
    nodeEnv: process.env.NODE_ENV!,
    jwtSecret: process.env.JWT_SECRET!,
};

export default config;