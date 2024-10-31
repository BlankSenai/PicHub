import { Knex } from "../../knex";
import { IUsuario } from "../../models";

export const getByEmail = async (email: string): Promise<IUsuario | Error> => {
    try {
        const [result] = await Knex('usuario')
            .select('*')
            .where('email', '=', email)
        
        if (result) return result

        return new Error('Erro ao encontrar o email')
    } catch (error) {
        return new Error('Erro ao encontrar o email')
    }
}
