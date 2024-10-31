import { Knex } from "../../knex";
import { IImagem } from "../../models";

export const getAll = async (id: number): Promise<IImagem[] | Error> => {
    try {
        const result = await Knex('imagem')
            .select('imagem.*')
            .innerJoin('colecao_imagem', function ()  {
                this.on('imagem.id', '=', 'colecao_imagem.imagemId')
            })
            .where('colecao_imagem.colecaoId', '=', id)

        if (result) return result

        return new Error('Erro ao buscar coleções')
    } catch (error) {
        return new Error('Erro ao buscar coleções')
    }
}
