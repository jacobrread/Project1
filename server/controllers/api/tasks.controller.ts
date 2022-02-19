import { Body, Controller, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Project } from 'server/entities/project.entity';
import { Task } from 'server/entities/task.entity';
import { UserProject } from 'server/entities/userProject.entity';
import { TasksService } from 'server/providers/services/tasks.service';
import { userProjectsService } from 'server/providers/services/userProjects.service';

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
  constructor(private tasksService: TasksService, private userprojectsService: userProjectsService) {}

  @Get('/tasks') // lists all tasks
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
    const project = await this.userprojectsService.findProjectForUser(jwtBody.userId,body.parentProjectId);

    // check to see if the current user is part of the current project
    if (project != null) {
      let task = new Task();
      task.title = body.title;
      task.description = body.description;
      task.timeEstimate = body.timeEstimate;
      task.status = false;
      task.assignedUser = jwtBody.userId;
      task.parentProjectId = body.parentProjectId;
      task = await this.tasksService.createTask(task);
      return { task };
    }
    throw new HttpException('Error creating a task', 401);
  }

  @Put('/tasks/:id') // update the state of the task
  public async update(@Param('id') id: string) {
    var task = await this.tasksService.updateBool(parseInt(id, 10));
    return { task };
  }

  @Put('/tasks/assignuser/:id') // update the state of the task
  public async assignUser(@Param('id') projectId: string, @JwtBody() jwtBody: JwtBodyDto) {
    var task = await this.tasksService.updateUser(parseInt(projectId, 10), jwtBody.userId);
    return { task };
  }
}
