import { User } from '@/app/interface/user'
import { db } from '@/database'
import { users } from '@/database/schema/user'
import bcrypt from 'bcryptjs'
import { eq } from 'drizzle-orm'

export class UserService
{
  static async findUserByEmail(email: string): Promise<User | null> {
    const result: User[] = await db.select().from(users).where(eq(users.email, email))

    return result[0] || null
  }

  static async createUser(name: string, email: string, password: string): Promise<void> {
    const passwordHash: string = bcrypt.hashSync(password)

    await db.insert(users).values({name, email, password: passwordHash})
  }
}