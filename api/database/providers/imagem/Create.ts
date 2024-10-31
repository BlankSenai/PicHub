import { Knex } from "../../knex";
import { IImagem } from "../../models";

export const create = async (imagem: Omit<IImagem, 'id'>): Promise<number | Error> => {
    try {
        const [result] = await Knex('imagem').insert(imagem).returning('id')

        if (result) return result.id

        return new Error('Erro ao inserir a imagem')
    } catch (error) {
        return new Error('Erro ao inserir a imagem')
    }
}   
