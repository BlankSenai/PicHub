import { Knex } from "knex"

export async function up(knex: Knex) {
    return knex
        .schema
        .createTable('colecao_imagem', table => {
            table.bigIncrements('id').primary().index()
            table.bigInteger('colecaoId').references('id').inTable('colecao').notNullable()    
            table.bigInteger('imagemId').references('id').inTable('imagem').notNullable()    
        })
        .then(() => {
            console.log('Created table colecao_imagem')
        })
}

export async function down(knex: Knex) {
    return knex
        .schema
        .dropTable('colecao_imagem')
        .then(() => {
            console.log('Dropped table colecao_imagem')
        })
}
