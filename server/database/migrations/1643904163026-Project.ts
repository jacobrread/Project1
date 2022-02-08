import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class Project1643904163026 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'project',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'text',
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
    await queryRunner.createForeignKey(
      'project',
      new TableForeignKey({
        columnNames: ['projectLeadId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('project');
  }
}
