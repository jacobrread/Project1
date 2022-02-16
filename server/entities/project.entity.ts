import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { Task } from './task.entity';
import { User } from './user.entity';
import { UserProject } from './userProject.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  projectLeadId: number;

  @ManyToOne(() => User, (user) => user.projects)
  @JoinColumn({name : 'projectLeadId'})
  user: User;

  @OneToMany(() => Task, (task) => task.project)
  tasks: Task[];

  @OneToMany(() => UserProject, (userProject) => userProject.project)
  userProjects: UserProject[];

  @Column()
  name:string;
}
