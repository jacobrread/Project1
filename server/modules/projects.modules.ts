import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectsController } from 'server/controllers/api/projects.controller';
import { Project } from 'server/entities/project.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  controllers: [ProjectsController],
  providers: [],
  exports: [],
})
export class ProjectsModule {}
