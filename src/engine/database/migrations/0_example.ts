import {Knex} from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('example',  (table) => {
    table.string('id', 36).primary().notNullable();
    table.dateTime('createdAt').notNullable();
    table.dateTime('updatedAt').notNullable();
    table.dateTime('deletedAt').nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('example');
}
