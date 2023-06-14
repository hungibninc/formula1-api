const { MigrationInterface, QueryRunner } = require('typeorm');

module.exports = class Schema1686736319616 {
  name = 'Schema1686736319616';

  async up(queryRunner) {
    await queryRunner.query(
      `CREATE TABLE \`standing\` (\`id\` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`standing\` ADD \`grand_prix\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`standing\` ADD \`racing_date\` date NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`standing\` ADD \`driver\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`standing\` ADD \`nationality\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`standing\` ADD \`team\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`standing\` ADD \`position\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`standing\` ADD \`ranking\` int NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`standing\` ADD \`laps\` int NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`standing\` ADD \`time_retire\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`standing\` ADD \`points\` int NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`standing\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`standing\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE \`standing\` DROP COLUMN \`updated_at\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`standing\` DROP COLUMN \`created_at\``,
    );
    await queryRunner.query(`ALTER TABLE \`standing\` DROP COLUMN \`points\``);
    await queryRunner.query(
      `ALTER TABLE \`standing\` DROP COLUMN \`time_retire\``,
    );
    await queryRunner.query(`ALTER TABLE \`standing\` DROP COLUMN \`laps\``);
    await queryRunner.query(`ALTER TABLE \`standing\` DROP COLUMN \`ranking\``);
    await queryRunner.query(
      `ALTER TABLE \`standing\` DROP COLUMN \`position\``,
    );
    await queryRunner.query(`ALTER TABLE \`standing\` DROP COLUMN \`team\``);
    await queryRunner.query(
      `ALTER TABLE \`standing\` DROP COLUMN \`nationality\``,
    );
    await queryRunner.query(`ALTER TABLE \`standing\` DROP COLUMN \`driver\``);
    await queryRunner.query(
      `ALTER TABLE \`standing\` DROP COLUMN \`racing_date\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`standing\` DROP COLUMN \`grand_prix\``,
    );
    await queryRunner.query(`DROP TABLE \`standing\``);
  }
};
