import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RefreshToken } from './refresh_token.entity';
import { UserRole } from './user_role.entity';
import { Project } from './project.entity';
import { UserProject } from './userProject.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ nullable: false })
  passwordHash: string;

  @OneToMany(() => RefreshToken, (token) => token.user)
  refreshTokens: RefreshToken[];

  @OneToMany(() => UserRole, (userRole) => userRole.user, { cascade: true })
  userRoles: UserRole[];

  @OneToMany(() => Project, (project) => project.user)
  projects: Project[];

  @OneToMany(() => UserProject, (userProject) => userProject.user)
  userProjects: UserProject[];
}
