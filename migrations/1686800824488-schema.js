const { MigrationInterface, QueryRunner } = require('typeorm');

module.exports = class Schema1686800824488 {
  name = 'Schema1686800824488';

  async up(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE \`standing\` CHANGE \`ranking\` \`license_plate\` int NOT NULL`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(
      `ALTER TABLE \`standing\` CHANGE \`license_plate\` \`ranking\` int NOT NULL`,
    );
  }
};
