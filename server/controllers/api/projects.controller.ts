import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Project } from 'server/entities/project.entity';
import { UserProject } from 'server/entities/userProject.entity';
import { ProjectsService } from 'server/providers/services/projects.service';
import { UsersService } from 'server/providers/services/users.service';

class ProjectPostBody {
  name:string;
}

@Controller()
export class ProjectsController {
  constructor(private projectsService: ProjectsService, private userService: UsersService) {}

  @Get('/projects') // list all projects
  public async index(@JwtBody() jwtBody: JwtBodyDto) {
    const projects = await this.projectsService.findAllForUser(jwtBody.userId);
    return { projects };
  }

  @Get('/projects/:id') // find project by id
  public async getSpecificProject(@Param('id') id: string, @JwtBody() jwtBody: JwtBodyDto) {
    const userProject = await this.projectsService.findProjectForUser(jwtBody.userId, parseInt(id, 10));

    // check to see if the current user is in the project
    const userProjectsList = await this.projectsService.findAllForUser(jwtBody.userId);

    if (id in userProjectsList) {
      if (!userProject) {
        throw new HttpException('Unauthorized', 401);
      }
      return { project: userProject.project };
    }
    throw new HttpException('Unauthorized', 401);
  }

  @Post('/projects') // create new projects
  public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: ProjectPostBody) {
    let project = new Project();
    project.name = body.name;
    const userProject = new UserProject();
    project.projectLeadId = jwtBody.userId;
    project = await this.projectsService.createProject(project);
    userProject.projectId = project.id;
    userProject.userId = jwtBody.userId;
    await this.projectsService.createRelation(userProject);
    return { project };
  }

  @Post('/projects/:id/invite') // invite others to project
  public async invite(@Param('id') id: string, @JwtBody() jwtBody: JwtBodyDto, @Param('invite') invite: string) {
    const isUserPresent = await this.userService.findAll([invite]);
    if (isUserPresent != null) {
      const userIdToAdd = isUserPresent[0].id;
      const newUserProject = new UserProject();
      newUserProject.projectId = parseInt(id, 10);
      newUserProject.userId = userIdToAdd;
      await this.projectsService.createRelation(newUserProject);
    } else {
      throw new HttpException('User does not exist', 401);
    }
  }
}
