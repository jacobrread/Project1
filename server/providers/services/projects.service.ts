import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from 'server/entities/project.entity';
import { UserProject } from 'server/entities/userProject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
    @InjectRepository(UserProject)
    private userProjectRepository: Repository<UserProject>,
  ) {}

  async findAllForUser(userId: number): Promise<Project[]> {
    const userProjects = await this.userProjectRepository.find({
      where: { userId },
      relations: ['project','project.tasks','project.userProjects','project.userProjects.user'],
    });
    return userProjects.map((userProject) => userProject.project);
  }

  findProjectById(id: number) {
    return this.projectRepository.findOne(id);
  }

  createProject(project: Project): Promise<Project> {
    return this.projectRepository.save(project);
  }

  createRelation(userproject: UserProject): Promise<UserProject> {
    return this.userProjectRepository.save(userproject);
  }

  findProjectForUser(userId: number, projectId: number): Promise<UserProject> {
    return this.userProjectRepository.findOne({
      where: { userId, projectId },
      relations: ['project'],
    });
  }
}
