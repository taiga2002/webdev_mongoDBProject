import mongoose from 'mongoose';

// TODO: Phase 2: Write the schema for the database using mongoose.Schema

const taskSchema = new mongoose.Schema({
  example: {
    type: String,
    required: true,
  },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
// TODO: Phase 3: Add support for subtasks
