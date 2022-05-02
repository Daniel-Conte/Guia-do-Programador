import config from '../knexfile';
import knex from 'knex';

const knexConfig = knex(config);

// Executa o comando "knex migrate:latest" sempre que iniciar o back
// Não é recomendado fazer isso para migrations complexas, pois pode perder o controle de quando vão ser executadas
knexConfig.migrate.latest();

export default knexConfig;
