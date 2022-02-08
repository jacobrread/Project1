import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

  /**
   * Is this right?
   */
  @Get('/tasks/:id') // find task by id
  public async getSpecifiedTask(@Param('id') id: string) {
    const task = await this.tasksService.findTaskById(parseInt(id, 10));
    return { task };
  }

  @Post('/tasks') // create new tasks
  public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: TaskPostBody) {
    let task = new Task();
    task.title = body.title;
    task.description = body.description;
    task.timeEstimate = body.timeEstimate;
    task.status = body.status;
    task.assignedUser = body.assignedUser;
    task.parentProjectId = body.parentProjectId;
    // task.userId = jwtBody.userId // if this doesn't work then what are we supposed to use jwtbody.userId for?
    task = await this.tasksService.createProject(task);
    return { task };
  }

  /**
   * TODO
   */
  @Post('/tasks/update') // update the state of the task
  public async update() {}
}
