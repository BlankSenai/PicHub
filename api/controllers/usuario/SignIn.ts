import { IUsuario } from "../../database/models";
import * as yup from 'yup'
import { validation } from "../../shared/middleware/Validation";
import { Request, Response } from "express";
import { UsuariosProvider } from "../../database/providers/usuario";
import { StatusCodes } from "http-status-codes";
import { JWTService, verifyPassword } from "../../shared/services";

interface IBodyProps extends Omit<IUsuario, 'id' | 'nome'> {}

export const signInValidation = validation(get => ({
    body: get<IBodyProps>(yup.object().shape({
        email: yup.string().email().required().min(5),
        senha: yup.string().required().min(6)
    }))
}))

export const signIn = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
    const { email, senha } = req.body
    
    const userResult = await UsuariosProvider.getByEmail(email)

    if (userResult instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: 'E-mail ou senha inválidos'
            }
        })
    }

    const userPassword = await verifyPassword(senha, userResult.senha)

    if (!userPassword) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: 'E-mail ou senha inválidos'
            }
        })
    } else {
        const accessToken = JWTService.sign({ uid: userResult.id })

        return res.status(StatusCodes.OK).json({ accessToken })
    }
}
