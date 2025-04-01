import http from 'http';
import app from './app';
import config from './config';
import dbConnect from './utils/dbConnect';

const PORT = config.port;
const server = http.createServer(app);

const startServer = async () => {
    try {
        await dbConnect();

        server.listen(PORT, () => {
            console.log(`Server running in ${config.nodeEnv} mode on port ${PORT}`);
            console.log(`API available at http://localhost:${PORT}/api/v1`);
        });

    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

process.on('unhandledRejection', (err: Error) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
    process.exit(0);
  });
});

startServer();