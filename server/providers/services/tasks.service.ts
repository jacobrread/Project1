import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'server/entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  findAllForUser(userId: number): Promise<Task[]> {
    return this.taskRepository.find({
      where: { userId },
    });
  }

  createProject(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }

  findTaskById(id: number) {
    return this.taskRepository.findOne(id);
  }

  updateBool(id: number) {
    const task = this.taskRepository.findOne(id);
    // task.status = !status;
  }
}
