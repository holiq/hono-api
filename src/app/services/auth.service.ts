import { IAuth } from '@/app/interfaces/auth.interface'
import { IUser } from '@/app/interfaces/user.interface'
import { UserService } from '@/app/services/user.service'
import { JwtHandler } from '@/utils/jwt-handler'

export class AuthService
{
  static async login(email: string, password: string): Promise<IAuth | null> {
    const user: IUser | null = await UserService.findByEmail(email)

    if (!user || !await Bun.password.verify(password, user.password)) {
      return null
    }

    const {password: _, ... sanitizedUser} = user

    return {
      user: sanitizedUser,
      token: await JwtHandler.encrypt(user),
    }
  }

  static async register(name: string, email: string, password: string): Promise<IAuth | null> {
    const existingUser: IUser | null = await UserService.findByEmail(email)

    if (existingUser) {
      return null
    }

    const newUser: IUser = await UserService.createUser(name, email, password)

    const {password: _, ... data} = newUser

    return {
      user: data,
      token: await JwtHandler.encrypt(newUser),
    }
  }
}