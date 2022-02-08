import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userProject } from 'server/entities/userProject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class userProjectsService {
  constructor(
    @InjectRepository(userProject)
    private userProjectRepository: Repository<userProject>,
  ) {}

  findAllUsers(userId: number): Promise<userProject[]> {
    return this.userProjectRepository.find({
      where: { userId },
    });
  }

  findAllProjects(projectId: number): Promise<userProject[]> {
    return this.userProjectRepository.find({
      where: { projectId },
    });
  }

  createRelation(userproject: userProject): Promise<userProject> {
    return this.userProjectRepository.save(userproject);
  }

  /**
   * TODO
   */
  update() {}
}
