import { Knex } from "../../knex";
import { IUsuario } from "../../models";

export const getById = async (id: number): Promise<IUsuario | Error> => {
    try {
        const [result] = await Knex('usuario')
            .select('*')
            .where('id', '=', id)
        
        if (result) return result

        return new Error('Erro ao encontrar o usuário')
    } catch (error) {
        return new Error('Erro ao encontrar o usuário')
    }
}
