import { Knex } from "../../knex";
import { IUsuario } from "../../models";
import { hashPassword } from '../../../shared/services'

export const create = async (usuario: Omit<IUsuario, 'id'>): Promise<number | Error> => {
    try {
        const hashedPassword = await hashPassword(usuario.senha)

        const [result] = await Knex('usuario').insert({...usuario, senha: hashedPassword}).returning('id')

        if (result) return result.id

        return new Error('Erro ao cadastrar o usuário')
    } catch (error) {
        return new Error('Erro ao cadastrar o usuário')
    }
}   
