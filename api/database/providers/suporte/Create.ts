import { Knex } from "../../knex";
import { ISuporte } from "../../models";

export const create = async (pergunta: Omit<ISuporte, 'id'>): Promise<number | Error> => {
    try {
        const [result] = await Knex('suporte').insert(pergunta)

        if (result) return result

        return new Error('Erro ao enviar mensagem')
    } catch (error) {
        return new Error('Erro ao enviar mensagem')
    }
}   
