import { Entity, PrimaryGeneratedColumn, OneToMany, Column } from 'typeorm';
import { UserRole } from './user_role.entity';

// Make sure to add aditional roles here then reseed
export enum RoleKey {
  ADMIN = 'admin',
  USER = 'user',
  PROJECT_LEAD = 'project_lead',
  PROJECT_MEMBER = 'project_member',
}

@Entity()
export class Role {
  static ROLES = [RoleKey.ADMIN, RoleKey.USER, RoleKey.PROJECT_LEAD, RoleKey.PROJECT_MEMBER];

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  key: RoleKey;

  @OneToMany(() => UserRole, (userRole) => userRole.role)
  userRoles: UserRole[];
}
