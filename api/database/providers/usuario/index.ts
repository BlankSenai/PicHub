import * as create from './Create'
import * as getByEmail from './GetByEmail'
import * as getById from './GetById'

export const UsuariosProvider = {
    ...create,
    ...getByEmail,
    ...getById
}
