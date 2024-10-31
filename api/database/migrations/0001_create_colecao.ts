import { Knex } from "knex"

export async function up(knex: Knex) {
    return knex
        .schema
        .createTable('colecao', table => {
            table.bigIncrements('id').primary().index()
            table.string('nome').index().notNullable()
            table.string('data').notNullable()
            table.string('local').notNullable()
        })
        .then(() => {
            console.log('Created table colecao')
        })
}

export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable('colecao')
        .then(() => {
            console.log('Dropped table colecao')
        })
}
