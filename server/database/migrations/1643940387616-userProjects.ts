import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserProjects1643940387616 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'userProjects',
        columns: [
          {
            name: 'userId',
            type: 'int',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'projectId',
            type: 'int',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('userProjects');
  }
}