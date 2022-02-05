import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class Project1643904163026 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'project',
        columns: [
          {
            name: 'projectId',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'projectLeadId',
            type: 'int',
            isNullable: false,
          },
          // {
          //   name: 'memberId',
          //   type: 'int',
          //   isNullable: false,
          // },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('project');
  }
}
