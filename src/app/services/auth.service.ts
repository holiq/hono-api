import { EmailAlreadyExistsException } from '@/app/exceptions/email-already-exists.exception'
import { UnauthenticatedException } from '@/app/exceptions/unauthenticated.exception'
import type { IAuth } from '@/app/interfaces/auth.interface'
import type { IUser } from '@/app/interfaces/user.interface'
import { UserService } from '@/app/services/user.service'
import { JwtHandler } from '@/utils/jwt-handler'

export class AuthService {
  static async login(email: string, password: string): Promise<IAuth | null> {
    const user: IUser | null = await UserService.findByEmail(email)

    if (!user || !(await Bun.password.verify(password, user.password))) {
      throw new UnauthenticatedException('Invalid credentials')
    }

    const { password: _, ...sanitizedUser } = user

    return {
      user: sanitizedUser,
      token: await JwtHandler.encrypt(user),
    }
  }

  static async register(name: string, email: string, password: string): Promise<IAuth | null> {
    const existingUser: IUser | null = await UserService.findByEmail(email)

    if (existingUser) {
      throw new EmailAlreadyExistsException('Email already exists')
    }

    const newUser: IUser = await UserService.createUser(name, email, password)

    const { password: _, ...data } = newUser

    return {
      user: data,
      token: await JwtHandler.encrypt(newUser),
    }
  }
}
