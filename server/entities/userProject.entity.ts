import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';
import { User } from './user.entity';

@Entity()
export class userProject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  projectId: number;

  @ManyToMany(() => Project, (project) => project.userProjects)
  project: Project[];

  @ManyToMany(() => User, (user) => user.userProjects)
  user: User[];
}
