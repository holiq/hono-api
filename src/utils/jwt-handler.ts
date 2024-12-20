import { sign } from 'hono/jwt'
import type { IUser } from '@/app/interfaces/user.interface'
import { ENV } from '@/config/env'

export class JwtHandler {
  static async encrypt(user: IUser): Promise<string> {
    const payload = {
      id: user.id,
      email: user.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 60,
    }

    return await sign(payload, ENV.JWT_SECRET)
  }
}
