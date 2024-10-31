import { Request, Response } from "express";
import { ImagemProvider } from "../../database/providers/imagem";
import { StatusCodes } from "http-status-codes";
import { IColecaoImagem } from "../../database/models";

interface IParamProps extends Omit<IColecaoImagem, 'id' | 'imagemId'> {}

export const getAll = async (req: Request<IParamProps>, res: Response) => {
    const result = await ImagemProvider.getAll(Number(req.params.colecaoId))

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.OK).json(result)
}
