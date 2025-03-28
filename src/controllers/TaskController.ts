import type { Request, Response } from "express";
import Project from "../models/Project";
import Task from "../models/Task";

export class TaskController {

  static async createTask(req: Request, res: Response) {
    try {
      const task = new Task(req.body);
      task.project = req.project.id
      req.project.tasks.push(task.id)
      await Promise.allSettled([task.save(), req.project.save()]);
      res.status(201).json("Task created successfully");
    } catch (error) {
      console.log(error)
    }
  }
}
