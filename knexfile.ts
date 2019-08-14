const path = require('path');
const BASE_PATH = path.join(__dirname, 'src', 'db');

module.exports = {
  test: {
    client: 'postgres',
    connection: 'postgres://postgres:root@localhost:5432/testdb',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  development: {
    client: 'postgres',
    connection: 'postgres://postgres:root@localhost:5432/proddb',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
};