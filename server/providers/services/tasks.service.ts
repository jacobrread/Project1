import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { take } from 'lodash';
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

  createTask(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }

  findTaskById(id: number): Promise<Task> {
    return this.taskRepository.findOne(id);
  }

  async updateStatus(id: number) {
    var task = await this.taskRepository.findOne(id);
    if(task.status == 'Incomplete'){
      task.status = 'Completed'
    } else{
      task.status = 'Incomplete'
    }
    console.log(task.status);
    console.log('jared');
    this.taskRepository.save(task); 
    console.log('saved')   
  }

  async updateUser(taskId: number, userId: number) {
    var task = await this.taskRepository.findOne(taskId);
    task.assignedUser = userId;
    this.taskRepository.save(task);
  }

}
