import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import {Task} from "../models/task.model";

@Controller('/task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    async getAll(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string): Promise<Task> {
        return this.taskService.findOne(id);
    }

    @Post()
    async create(@Body() category: Task): Promise<Task> {
        return this.taskService.create(category);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() category: Task): Promise<Task> {
        return this.taskService.update(id, category);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<Task> {
        return this.taskService.delete(id);
    }
}
