import type { Request, Response } from "express";
import Project from "../models/Project";
import Task from "../models/Task";

export class TaskController {

  static async createTask(req: Request, res: Response) {
    const { projectId } = req.params;
    try {
      const project = await Project.findById(projectId);
      if (!project) {
        res.status(404).json({ message: "Project not found" });
      }
      const task = new Task(req.body);
      task.project = project.id
      project.tasks.push(task.id)
      await task.save()
      await project.save()
      res.status(201).json("Task created successfully");
    } catch (error) {
      console.log(error)
    }
  }
}
