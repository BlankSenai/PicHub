import { Knex } from "knex"

export async function up(knex: Knex) {
    return knex
        .schema
        .createTable('imagem', table => {
            table.bigIncrements('id').primary().index()
            table.string('nome').index().notNullable()
            table.binary('imagem').notNullable()
            table.string('tipo').notNullable()
        })
        .then(() => {
            console.log('Created table imagem')
        })
}

export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable('imagem')
        .then(() => {
            console.log('Dropped table imagem')
        })
}
