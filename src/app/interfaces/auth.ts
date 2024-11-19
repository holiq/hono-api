import { IUser } from '@/app/interfaces/user.interface'

export interface JwtPayload
{
  id: number
  email: string
}

export interface AuthResponse
{
  user: Pick<IUser, 'id' | 'name' | 'email' | 'created_at' | 'updated_at'>
  token: string
}
