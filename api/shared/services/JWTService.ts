import * as jwt from 'jsonwebtoken'

const jwtSecret = 'bomboclat4320'

interface IJWTData {
  uid: number
}

const sign = (data: IJWTData) => {
  
  return jwt.sign(data, jwtSecret, { expiresIn: '24h' })
} 

const verify = (token: string) => {  
  try {
    const decoded = jwt.verify(token, jwtSecret)
    
    if (typeof decoded === 'string') return 'INVALID_TOKEN'

    return decoded as IJWTData
  } catch (error) {
    return 'INVALID_TOKEN'
  }

}

export const JWTService = {
  sign,
  verify
}
