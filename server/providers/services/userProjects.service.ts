import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProject } from 'server/entities/userProject.entity';
import { Repository } from 'typeorm';

@Injectable()
export class userProjectsService {
  constructor(
    @InjectRepository(UserProject)
    private userProjectRepository: Repository<UserProject>,
  ) {}

  findAllUsers(projectId: number): Promise<UserProject[]> {
    return this.userProjectRepository.find({
      where: { projectId },
    });
  }

  findAllProjects(userId: number): Promise<UserProject[]> {
    return this.userProjectRepository.find({
      where: { userId },
    });
  }

  /**
   * TODO
   */
  update() {}
}
