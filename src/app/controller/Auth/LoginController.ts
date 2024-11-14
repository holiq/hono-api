import { Context } from 'hono'
import { Response } from '@/utils/Response'

export class LoginController
{
  static async handle(c: Context) {
    const data = await c.req.json()

    return Response.resolveForSuccess(c, 'Login Success', data)
  }
}