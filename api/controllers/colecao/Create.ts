import { Request, Response } from "express";
import { IColecao, IUsuarioColecao } from "../../database/models";
import { validation } from '../../shared/middleware/Validation'
import * as yup from 'yup'
import { ColecaoProvider } from "../../database/providers/colecao";
import { UsuarioColecaoProvider } from "../../database/providers/usuario_colecao";
import { StatusCodes } from "http-status-codes";

interface IBodyProps extends Omit<IColecao, 'id'> {}

export const createValidation = validation(get => ({
    body: get<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(1),
        data: yup.string().required().min(10),
        local: yup.string().required().min(2)
    }))
}))

export const create = async (req: Request<{}, {}, IBodyProps>, res: Response) => {
    const collectionResult = await ColecaoProvider.create(req.body)

    if (collectionResult instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: collectionResult.message
            }
        })
    }

    const relation: Omit<IUsuarioColecao, 'id'> = {
        UsuarioId: Number(req.headers.uid),
        ColecaoId: collectionResult
    }

    const result = await UsuarioColecaoProvider.create(relation)

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.CREATED).json()
}
