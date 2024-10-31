import { IColecao } from '../../models'
import { Knex } from '../../knex'

export const create = async (colecao: Omit<IColecao, 'id'>): Promise<number | Error> => {
    try {
        const [result] = await Knex('colecao').insert(colecao).returning('id')
        
        if (result) return result.id

        return new Error('Erro ao cadastrar colecao')
    } catch (error) {
        return new Error('Erro ao cadastrar colecao')
    }
}
