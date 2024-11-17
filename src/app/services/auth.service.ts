import { AuthResponse } from '@/app/interface/auth'
import { User } from '@/app/interface/user'
import { UserService } from '@/app/services/user.service'
import { encrypt } from '@/utils/jwt-handler'
import bcrypt from 'bcryptjs'

export class AuthService
{
  static async login(email: string, password: string): Promise<AuthResponse | null> {
    const user: User | null = await UserService.findUserByEmail(email)

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return null
    }

    return {
      user: user,
      token: await encrypt(user),
    }
  }

  static async register(name: string, email: string, password: string) {
    const existingUser: User | null = await UserService.findUserByEmail(email)

    if (existingUser) {
      return null
    }

    await UserService.createUser(name, email, password)

    return {
      user: {
        name,
        email,
      },
      token: await encrypt({email}),
    }
  }
}