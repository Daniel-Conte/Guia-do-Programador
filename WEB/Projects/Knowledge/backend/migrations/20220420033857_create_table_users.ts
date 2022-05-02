import { Knex } from 'knex';

// Migrations servem para manipular o banco de dados sem ser via SQL diretamente no banco
// Possuem 2 funções para "evoluir" e "desevoluir" o banco
// Sempre que precisar fazer uma alteração nova no esquema do banco de dados é necessário criar uma migration nova(isso se o sistema já está implantado em produção)
// As funções devem retornar um builder

// "up" irá fazer a "evolução" do banco(pode ser tanto criar tabelas ou excluir alguma)
export async function up(knex: Knex): Promise<Knex.SchemaBuilder> {
  // Cria tabela de usuários
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password').notNullable();
    table.boolean('admin').notNullable().defaultTo(false);
  });
}

// "down" irá fazer a "desevolução" do banco
// Esta função deve DESFAZER o que a função "up" fez(ou seja, fazer o inverso), assim tendo controle para desfazer alguma cagada
// Se o "up" cria uma tabela, o "down" deve excluí-la
// Se o "up" exclui uma tabela, o "down" deve recriá-la
// "A soma das 2 funções deve ser 0"
export async function down(knex: Knex): Promise<Knex.SchemaBuilder> {
  return knex.schema.dropTable('users');
}
