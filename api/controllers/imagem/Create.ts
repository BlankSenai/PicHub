import { IColecaoImagem, IImagem } from "../../database/models";
import * as yup from 'yup'
import { validation } from "../../shared/middleware/Validation";
import { Request, Response } from "express";
import { ImagemProvider } from "../../database/providers/imagem";
import { StatusCodes } from "http-status-codes";
import { ColecaoImagemProvider } from "../../database/providers/colecao_imagem";

interface IBodyProps extends Omit<IImagem, 'id'> {}

interface IParamProps extends Omit<IColecaoImagem, 'id' | 'imagemId'> {}

export const createValidation = validation(get => ({
    body: get<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(1),
        imagem: yup.mixed().required(),
        tipo: yup.string().required()
    })),
   params: get<IParamProps>(yup.object().shape({
        colecaoId: yup.number().integer().optional().moreThan(0)
   })) 
}))

export const create = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
    const imageResult = await ImagemProvider.create(req.body)

    if (imageResult instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: imageResult.message
            }
        })
    }

    const relation: Omit<IColecaoImagem, 'id'> = {
        imagemId: imageResult,
        colecaoId: req.params.colecaoId
    }    

    const result = ColecaoImagemProvider.create(relation)

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.CREATED).json()
}   
