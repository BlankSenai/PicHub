import * as signIn from './SignIn'
import * as signUp from './SingUp'
import * as getById from './GetById'

export const UsuariosController = {
    ...signIn,
    ...signUp,
    ...getById
}