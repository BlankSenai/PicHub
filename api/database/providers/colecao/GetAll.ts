import { Knex } from "../../knex";
import { IColecao } from "../../models";

export const getAll = async (id: number): Promise<IColecao[] | Error> => {
    try {
        const result = await Knex('colecao')
            .select('colecao.*')
            .innerJoin('usuario_colecao', function ()  {
                this.on('colecao.id', '=', 'usuario_colecao.colecaoId')
            })
            .where('usuario_colecao.usuarioId', '=', id)

        if (result) return result

        return new Error('Erro ao buscar coleções')
    } catch (error) {
        return new Error('Erro ao buscar coleções')
    }
}
