import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { JwtBody } from 'server/decorators/jwt_body.decorator';
import { JwtBodyDto } from 'server/dto/jwt_body.dto';
import { Project } from 'server/entities/project.entity';
import { ProjectsService } from 'server/providers/services/projects.service';

class ProjectPostBody {
  projectLead: number;
}

@Controller()
export class ProjectsController {
  constructor(private projectsService: ProjectsService) {}

  @Get('/projects/') // list all projects
  public async index(@JwtBody() jwtBody: JwtBodyDto) {
    const projects = await this.projectsService.findAllForUser(jwtBody.userId);
    jwtBody.userId;
    return { projects };
  }

  /**
   * Is this right?
   */
  @Get('/projects/:id') // find project by id
  public async getSpecificProject(@Param('id') id: string) {
    const project = await this.projectsService.findProjectById(parseInt(id, 10));
    return { project };
  }

  @Post('/projects') // create new projects
  public async create(@JwtBody() jwtBody: JwtBodyDto, @Body() body: ProjectPostBody) {
    let project = new Project();
    project.projectLead = body.projectLead;
    project = await this.projectsService.createProject(project);
    return { project };
  }

  /**
   * TODO
   */
  @Post('/projects/invite') // invite others to project
  public invite() {}
}
