import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Task1643940358630 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'task',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'title',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'timeEstimate',
            type: 'int',
          },
          {
            name: 'status',
            type: 'bool',
            isNullable: false,
          },
          {
            name: 'assignedUser',
            type: 'int',
          },
          {
            name: 'parentProjectId',
            type: 'int',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('task');
  }
}
