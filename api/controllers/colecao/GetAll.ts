import { Request, Response } from "express";
import { ColecaoProvider } from "../../database/providers/colecao";
import { StatusCodes } from "http-status-codes";

export const getAll = async (req: Request, res: Response) => {
    const result = await ColecaoProvider.getAll(Number(req.headers.uid))

    if (result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        })
    }

    return res.status(StatusCodes.OK).json(result)
}
