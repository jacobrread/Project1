import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsController } from 'server/controllers/api/projects.controller';
import { Project } from 'server/entities/project.entity';
import { UserProject } from 'server/entities/userProject.entity';
import { ProjectsService } from 'server/providers/services/projects.service';
import { UsersModule } from './users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Project, UserProject]), UsersModule],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [],
})
export class ProjectsModule {}
