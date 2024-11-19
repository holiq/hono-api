import { AuthResponse } from '@/app/interfaces/auth'
import { AuthService } from '@/app/services/auth.service'
import { HttpStatus } from '@/utils/http-status'
import { Response } from '@/utils/response'
import { Context } from 'hono'

export class LoginController
{
  static async handle(c: Context) {
    const {email, password} = await c.req.json()

    const data: AuthResponse | null = await AuthService.login(email, password)

    if (!data) {
      return Response.resolveForFailed(c, 'Invalid credentials', null, HttpStatus.Unauthorized)
    }

    return Response.resolveForSuccess(c, 'Login Success', data)
  }
}