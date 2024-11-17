import { AuthService } from '@/app/services/auth.service'
import { Response } from '@/utils/response'
import { Context } from 'hono'


export class RegisterController
{
  static async handle(c: Context) {
    const {name, email, password} = await c.req.json()

    const data = await AuthService.register(name, email, password)

    if (!data) {
      return Response.resolveForFailed(c, 'Email already exists')
    }

    return Response.resolveForSuccess(c, 'Register Success', data)
  }
}