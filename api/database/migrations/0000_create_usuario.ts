import { Knex } from "knex"

export async function up(knex: Knex) {
    return knex
        .schema
        .createTable('usuario', table => {
            table.bigIncrements('id').primary().index()
            table.string('nome').notNullable()
            table.string('senha').notNullable()
            table.string('email').notNullable().index().unique()
        })
        .then(() => {
            console.log('Created table usuario')
        })
}

export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable('usuario')
        .then(() => {
            console.log('Dropped table usuario')
        })
}
