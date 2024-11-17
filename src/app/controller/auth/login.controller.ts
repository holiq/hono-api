import { AuthService } from '@/app/services/auth.service'
import { Response } from '@/utils/response'
import { Context } from 'hono'

export class LoginController
{
  static async handle(c: Context) {
    const {email, password} = await c.req.json()

    const data = await AuthService.login(email, password)

    if (!data) {
      return Response.resolveForFailed(c, 'Invalid credentials')
    }

    return Response.resolveForSuccess(c, 'Login Success', data)
  }
}