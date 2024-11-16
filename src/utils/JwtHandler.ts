import { ENV } from '@/config/env'
import * as jose from 'jose'

interface JwtPayload extends jose.JWTPayload
{
  email: string
}

export const encrypt = async (payload: JwtPayload) => {
  const SecretKey = new TextEncoder().encode(ENV.JWT_SECRET)

  return await new jose.SignJWT({payload}).setProtectedHeader({alg: 'HS256'}).sign(SecretKey)
}