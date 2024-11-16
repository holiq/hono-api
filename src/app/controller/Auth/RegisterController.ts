import { db } from '@/database'
import { users } from '@/database/schema/user'
import { encrypt } from '@/utils/JwtHandler'
import { Response } from '@/utils/Response'
import bcrypt from 'bcryptjs'
import { eq } from 'drizzle-orm'
import { Context } from 'hono'


export class RegisterController
{
  static async handle(c: Context) {
    const {name, email, password} = await c.req.json()

    const existingUser = await db.select().from(users).where(eq(users.email, email))

    if (existingUser.length > 0) {
      return Response.resolveForFailed(c, 'Email already exists.')
    }

    const hashedPassword = bcrypt.hashSync(password)

    await db.insert(users).values({name, email, password: hashedPassword})

    const token = await encrypt(email)

    return Response.resolveForSuccess(c, 'Register Success', {user: {name, email}, token})
  }
}