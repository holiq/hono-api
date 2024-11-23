import { eq } from 'drizzle-orm'
import { InternalServerErrorException } from '@/app/exceptions/internal-server-error.exception'
import type { IUser } from '@/app/interfaces/user.interface'
import { db } from '@/database'
import { users } from '@/database/schema/user'

export class UserService {
  static async findByEmail(email: string): Promise<IUser | null> {
    try {
      const result: IUser[] = await db.select().from(users).where(eq(users.email, email)).limit(1)

      return result[0] || null
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }

  static async createUser(name: string, email: string, password: string): Promise<IUser> {
    try {
      const passwordHash: string = await Bun.password.hash(password)

      const [user] = await db
        .insert(users)
        .values({ name, email, password: passwordHash })
        .returning()

      return user
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
