import { Knex } from "../../knex";
import { IColecaoImagem } from "../../models";

export const create = async (colecao_imagem: Omit<IColecaoImagem, 'id'>): Promise<void | Error> => {
    try {
        const [result] = await Knex('colecao_imagem').insert(colecao_imagem)
        
        if (result) return

        return new Error('Erro ao inserir dados')
    } catch (error) {
        return new Error('Erro ao inserir dados')
    }
}
