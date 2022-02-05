import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task.entity';
import { User } from './user.entity';
import { userProject } from './userProject.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  projectId: number;

  @Column()
  projectLead: number;

  @ManyToOne(() => User, (user) => user.projects)
  user: User;

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];

  @OneToMany(() => userProject, (userProject) => userProject.project)
  userProjects: userProject[];
}
