// Update with your config settings.
const Dotenv = require('dotenv');
Dotenv.config({ path: `${__dirname}/.env` });
console.log(process.env.DB_HOST);

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    }
  },

  production: {
    client: 'pg',
    // connection: {
    //   database: process.env.DB_NAME,
    //   user:     process.env.DB_USER,
    //   password: process.env.DB_PASS
    // },
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    }
  }

};
