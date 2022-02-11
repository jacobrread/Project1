import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Project } from 'server/entities/project.entity';
import { UserProject } from 'server/entities/userProject.entity';
import { ProjectsService } from 'server/providers/services/projects.service';

class ProjectPostBody {
  projectLead: number;
}

@Controller()
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get('/projects') // list all projects
  public async index(@JwtBody() jwtBody: JwtBodyDto) {
    const projects = await this.projectsService.findAllForUser(jwtBody.userId);
    return { projects };
  }

  /**
   * Is this right?
   */
  @Get('/projects/:id') // find project by id
  public async getSpecificProject(@Param('id') id: string, @JwtBody() jwtBody: JwtBodyDto) {
    const userProject = await this.projectsService.findProjectForUser(jwtBody.userId, parseInt(id, 10));
    // check to see if the current user is in the project first (hence jwtBody)
    if (!userProject) {
      throw new HttpException('Unauthorized', 401);
    }
    return { project: userProject.project };
  }

  @Post('/projects') // create new projects
  public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: ProjectPostBody) {
    let project = new Project();
    const userProject = new UserProject();
    project.projectLead = body.projectLead;
    project = await this.projectsService.createProject(project);
    userProject.projectId = project.id;
    userProject.userId = jwtBody.userId;
    await this.projectsService.createRelation(userProject);
    return { project };
  }

  /**
   * TODO
   */
  @Post('/projects/:id/invite') // invite others to project
  public async invite(@JwtBody() jwtBody: JwtBodyDto) {}
  // use the findProjectForUser
}
