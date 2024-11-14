import { Context } from 'hono'
import { Response } from '@/utils/Response'

export class RegisterController
{
  static async handle(c: Context) {
    const data = await c.req.json()

    return Response.resolveForSuccess(c, 'Register Success', data)
  }
}