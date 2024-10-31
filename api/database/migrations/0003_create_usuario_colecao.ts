import { Knex } from "knex"

export async function up(knex: Knex) {
    return knex
        .schema
        .createTable('usuario_colecao', table => {
            table.bigIncrements('id').primary().index()
            table.bigInteger('usuarioId').references('id').inTable('usuario').notNullable()    
            table.bigInteger('colecaoId').references('id').inTable('colecao').notNullable()    
        })
        .then(() => {
            console.log('Created table usuario_colecao')
        })
}

export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable('usuario_colecao')
        .then(() => {
            console.log('Dropped table usuario_colecao')
        })
}
