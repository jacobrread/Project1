import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Task } from 'server/entities/task.entity';
import { TasksService } from 'server/providers/services/tasks.service';

class TaskPostBody {
  title: string;
  description: string;
  timeEstimate: number;
  status: boolean;
  assignedUser: number;
  parentProjectId: number;
}

@Controller()
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/tasks/') // lists all tasks
  public async index(@JwtBody() jwtBody: JwtBodyDto) {
    const users = await this.tasksService.findAllForUser(jwtBody.userId);
    jwtBody.userId;
    return { users };
  }

  @Get('/tasks/:id') // find task by id
  public async getSpecifiedTask(@Param('id') id: string) {
    const task = await this.tasksService.findTaskById(parseInt(id, 10));
    return { task };
  }

  @Post('/tasks') // create new tasks
  public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: TaskPostBody) {
    // TODO: check to see if the current user is part of this project before creating
    if (jwtBody.userId) {
    }
    let task = new Task();
    task.title = body.title;
    task.description = body.description;
    task.timeEstimate = body.timeEstimate;
    task.status = body.status;
    task.assignedUser = body.assignedUser;
    task.parentProjectId = body.parentProjectId;
    task = await this.tasksService.createProject(task);
    return { task };
  }

  /**
   * TODO
   */
  @Put('/tasks/:id') // update the state of the task
  // TODO: check to make sure the user is part of this task before doing anything else
  public async update(@Param('id') id: string) {
    const task = await this.tasksService.findTaskById(parseInt(id, 10));
    task.status = !task.status;
  }
}
