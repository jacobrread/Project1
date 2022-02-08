import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userProjectsController } from 'server/controllers/api/userProject.controller';
import { userProject } from 'server/entities/userProject.entity';
import { userProjectsService } from 'server/providers/services/userProjects.service';

@Module({
  imports: [TypeOrmModule.forFeature([userProject])],
  controllers: [userProjectsController],
  providers: [userProjectsService],
  exports: [],
})
export class userProjectsModule {}
