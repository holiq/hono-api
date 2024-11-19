import { IUser } from '@/app/interfaces/user.interface'
import { db } from '@/database'
import { users } from '@/database/schema/user'
import { eq } from 'drizzle-orm'

export class UserService
{
  static async findByEmail(email: string): Promise<IUser | null> {
    const result: IUser[] = await db.select().from(users).where(eq(users.email, email)).limit(1)

    return result[0] || null
  }

  static async createUser(name: string, email: string, password: string): Promise<IUser> {
    const passwordHash: string = await Bun.password.hash(password)

    const [user] = await db.insert(users).values({name, email, password: passwordHash}).returning()

    return user
  }
}