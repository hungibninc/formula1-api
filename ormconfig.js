var dbConfig = {
  synchronize: false,
  migrations: ['migrations/*.js'],
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      entities: ['**/*.entity.js'],
      type: 'mysql',
      database: 'formula1',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
    });
    break;
  case 'production':
    Object.assign(dbConfig, {
      type: 'mysql',
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: ['**/*.entity.js'],
      migrationsRun: true,
    });
    break;
  default:
    throw new Error('unknown environment');
}

module.exports = dbConfig;
