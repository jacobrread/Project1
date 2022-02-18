import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from './project.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  timeEstimate: number;

  @Column()
  status: boolean;

  @Column()
  assignedUser: number;

  @Column()
  parentProjectId: number;

  @ManyToOne(() => Project, (project) => project.tasks)
  @JoinColumn({name:'parentProjectId'})
  project: Project;
}
