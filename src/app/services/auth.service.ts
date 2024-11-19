import { AuthResponse } from '@/app/interfaces/auth'
import { IUser } from '@/app/interfaces/user.interface'
import { UserService } from '@/app/services/user.service'
import { encrypt } from '@/utils/jwt-handler'
import bcrypt from 'bcryptjs'

export class AuthService
{
  static async login(email: string, password: string): Promise<AuthResponse | null> {
    const user: IUser | null = await UserService.findByEmail(email)

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return null
    }

    const {password: _, ... sanitizedUser} = user

    return {
      user: sanitizedUser,
      token: await encrypt(user),
    }
  }

  static async register(name: string, email: string, password: string): Promise<AuthResponse | null> {
    const existingUser: IUser | null = await UserService.findByEmail(email)

    if (existingUser) {
      return null
    }

    const newUser: IUser = await UserService.createUser(name, email, password)

    const {password: _, ... data} = newUser

    return {
      user: data,
      token: await encrypt(data),
    }
  }
}