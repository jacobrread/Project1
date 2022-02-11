import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';
import { User } from './user.entity';

@Entity()
export class UserProject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  projectId: number;

  @ManyToOne(() => Project, (project) => project.userProjects)
  project: Project;

  @ManyToOne(() => User, (user) => user.userProjects)
  user: User;
}
