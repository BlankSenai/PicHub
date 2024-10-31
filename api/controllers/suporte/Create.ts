import { Request, Response } from "express";
import { ISuporte } from "../../database/models";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup'
import { SuporteProvider } from "../../database/providers/suporte";
import { UsuariosProvider } from "../../database/providers/usuario";
import { validation } from "../../shared/middleware/Validation";

interface IBodyProps extends Omit<ISuporte, 'id'> {}

export const createValidation = validation(get => ({
    body: get(yup.object().shape({
        pergunta: yup.string().required().min(10)
    }))
}))

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
    const user = await UsuariosProvider.getById(Number(req.headers.uid))

    if (user instanceof Error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
            default: user.message
        }
    })
    }

    const pergunta = {
      pergunta: req.body.pergunta,
      data: new Date().toLocaleDateString(),
      email: user.email
    }

    const result = await SuporteProvider.create(pergunta)

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.CREATED).json(result)
}
