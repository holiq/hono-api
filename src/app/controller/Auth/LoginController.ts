import { db } from '@/database'
import { users } from '@/database/schema/user'
import { encrypt } from '@/utils/JwtHandler'
import { Response } from '@/utils/Response'
import bcrypt from 'bcryptjs'
import { eq } from 'drizzle-orm'
import { Context } from 'hono'

export class LoginController
{
  static async handle(c: Context) {
    const {email, password} = await c.req.json()

    const userRecords = await db.select().from(users).where(eq(users.email, email))

    const user = userRecords[0]

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return Response.resolveForFailed(c, 'Invalid credentials')
    }

    const data = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      token: await encrypt(email),
    }

    return Response.resolveForSuccess(c, 'Login Success', data)
  }
}