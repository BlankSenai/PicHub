import { Knex } from "../../knex";
import { IUsuarioColecao } from "../../models";

export const create = async (usuario_colecao: Omit<IUsuarioColecao, 'id'>): Promise<void | Error> => {
    try {
        const [result] = await Knex('usuario_colecao').insert(usuario_colecao)
        
        if (result) return

        return new Error('Erro ao inserir dados')
    } catch (error) {
        return new Error('Erro ao inserir dados')
    }
}
