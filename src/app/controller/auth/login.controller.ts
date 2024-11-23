import type { Context } from 'hono'
import type { IAuth } from '@/app/interfaces/auth.interface'
import { AuthService } from '@/app/services/auth.service'
import { Response } from '@/utils/response'

export class LoginController {
  static async handle(c: Context) {
    const { email, password } = await c.req.json()

    const data: IAuth | null = await AuthService.login(email, password)

    return Response.resolveForSuccess(c, 'Login Success', data)
  }
}
