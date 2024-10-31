import { Knex } from "knex"

export async function up(knex: Knex) {
    return knex
        .schema
        .createTable('suporte', table => {
            table.bigIncrements('id').primary().index()
            table.string('pergunta').notNullable()
            table.string('email').notNullable()
            table.string('data').notNullable()
        })
        .then(() => {
            console.log('Created table suporte')
        })
}

export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable('suporte')
        .then(() => {
            console.log('Dropped table suporte')
        })
}
