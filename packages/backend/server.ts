import taskRoutes from './src/routes/taskRoutes';
import express from 'express';
import dotenv from 'dotenv';
// import connectDB from './config/db' // TODO: Phase 2: uncomment this

// connect database
// connectDB() // TODO: Phase 2: uncomment this

//dotenv config
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded());

//Creating API for tasks
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 5000;

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`) as any);
