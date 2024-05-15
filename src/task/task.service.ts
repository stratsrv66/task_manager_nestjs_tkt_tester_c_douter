import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { Task } from "../models/task.model";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class TaskService {

  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>){}

  async create(user: Task): Promise<Task> {
    const newTask = new this.taskModel(user);
    return newTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  async update(id: string, task: Task): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, task)
  }

  async delete(id: string): Promise<Task> {
    return this.taskModel.findByIdAndDelete(id);
  }

}
