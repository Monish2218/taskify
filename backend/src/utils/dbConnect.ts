import mongoose from "mongoose";
import config from "../config";

const connectDB = async () : Promise<void> => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log('MongoDB connected successfully.');

    mongoose.connection.on('error', (error) => {
        console.error('MongoDB connection error:', error);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB disconnected.');
    });

} catch (error) {
    console.error('Could not connect to MongoDB:', error);
    process.exit(1);
}
};

export default connectDB;
