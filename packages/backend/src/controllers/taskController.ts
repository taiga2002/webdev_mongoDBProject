import Task from '../models/tasksModel';
import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';

// TODO: Phase 2: Setup functions to be used in routes/taskRoute.ts

export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  console.log('not implemented yet');
});

export const getUsersById = asyncHandler(async (req: Request, res: Response) => {
  console.log('not implemented yet');
});

// TODO: Any other routes you need

// TODO: Phase 3: Add support for subtasks
