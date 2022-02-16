import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from 'server/controllers/api/tasks.controller';
import { Task } from 'server/entities/task.entity';
import { UserProject } from 'server/entities/userProject.entity';
import { TasksService } from 'server/providers/services/tasks.service';
import { userProjectsService } from 'server/providers/services/userProjects.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task, UserProject])],
  controllers: [TasksController],
  providers: [TasksService, userProjectsService],
  exports: [],
})
export class TasksModule {}
