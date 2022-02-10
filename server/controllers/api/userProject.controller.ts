import { Body, Controller, Get, Post } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { userProject } from 'server/entities/userProject.entity';
import { userProjectsService } from 'server/providers/services/userProjects.service';

class userProjectPostBody {
  projectId: number;
}

@Controller()
export class userProjectsController {
  constructor(private user_projectsService: userProjectsService) {}

  /**
   * Is this right?
   */
  @Get('/userProjects?projects') // finds all projects
  public async index(@JwtBody() jwtBody: JwtBodyDto) {
    const projects = await this.user_projectsService.findAllProjects(jwtBody.userId);
    jwtBody.userId;
    return { projects };
  }

  /**
   * Is this Right?
   */
  @Get('/userProjects?users') // finds all users that belong to a project
  public async index2(@JwtBody() jwtBody: JwtBodyDto, @Body() body: userProjectPostBody) {
    const users = await this.user_projectsService.findAllUsers(body.projectId);
    // jwtBody.userId;
    return { users };
  }

  @Post('/userProjects/new') // adds new relation between userID and ProjectId
  public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: userProjectPostBody) {
    let user_project = new userProject();
    user_project.projectId = body.projectId;
    user_project = await this.user_projectsService.createRelation(user_project);
    return { user_project };
  }

  /**
   * TODO
   */
  @Post('/userProjects/update') // update a current relation
  public async update() {}
}
