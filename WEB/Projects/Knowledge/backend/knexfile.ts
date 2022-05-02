import type { Knex } from 'knex';

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const knexConfig: Knex.Config = {
  client: 'postgresql',
  connection: {
    database: 'knowledge',
    user: 'postgres',
    password: 'masterkey',
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
