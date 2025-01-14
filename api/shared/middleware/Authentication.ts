import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { JWTService } from "../services";


export const authenticate: RequestHandler = async (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: 'Não autenticado'
      }
    })
  }
  
  const [ type, token ] = authorization.split(' ')
  
  if (type !== 'Bearer') {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: 'Não autenticado'
      }
    })
  }
  
  const jwtData = JWTService.verify(token)
  
  if (jwtData === 'INVALID_TOKEN') {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: {
        default: 'Não autenticado'
      }
    })
  }

  req.headers.uid = jwtData.uid.toString()

  return next()
}
