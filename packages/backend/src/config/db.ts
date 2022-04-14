import mongoose from 'mongoose';
import Task from '../models/tasksModel';

const connectDB = async () => {
  try {
    // TODO: Phase 2: connect the database using mongoose.connect
    console.error('Connecting to database...');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;
