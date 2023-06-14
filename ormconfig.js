var dbConfig = {
  synchronize: false,
  migrations: ['migrations/*.js'],
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      //  type: 'sqlite',
      //  database: 'db.sqlite',
      entities: ['**/*.entity.js'],
      type: 'mysql',
      database: 'carval',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
    });
    break;
  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['**/*.entity.ts'],
      migrationsRun: true, //  migrations should be auto run on every application launch, due to test.sqlite will be deleted after finishing a test
    });
    break;
  case 'production':
    Object.assign(dbConfig, {
      //  url: process.env.DB_URL,
      type: 'mysql',
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: ['**/*.entity.js'], //  in production, we are running plain JavaScript files as opposed to TypeScript as we were during test.
      migrationsRun: true, //  migrations should be auto run on every application launch, to make sure that we run our migrations whenever we are about to launch our application in production.
      //  ssl: {
      //    rejectUnauthorized: false, // this is for Heroku config
      //  },
    });
    break;
  default:
    throw new Error('unknown environment');
}

module.exports = dbConfig;
