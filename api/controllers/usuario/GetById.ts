import { Request, Response } from "express";
import { UsuariosProvider } from "../../database/providers/usuario";
import { StatusCodes } from "http-status-codes";

export const getById = async (req: Request, res: Response) => {
	const result = await UsuariosProvider.getById(Number(req.headers.uid))

	if (result instanceof Error) {
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			errors: {
				default: result.message
			}
		})
	}

	return res.status(StatusCodes.OK).json(result)
}
