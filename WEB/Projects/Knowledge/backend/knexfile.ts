import type { Knex } from 'knex';

const { db } = require('./.env');

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const knexConfig: Knex.Config = {
  client: 'postgresql',
  connection: {
    database: db.database,
    user: db.user,
    password: db.password,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};

// Comandos CMD

// Rodar migrações
// "knex migrate:latest" - Executa todas as migrações(funções "up"), dá primeira à última
// "knex migrate:rollback" - Volta todas as migrações(funções "down")

export default knexConfig;
