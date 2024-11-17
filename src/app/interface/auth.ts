import { User } from '@/app/interface/user'

export interface JwtPayload
{
  email: string
}

export interface AuthResponse
{
  user: Pick<User, 'id' | 'name' | 'email' | 'created_at' | 'updated_at'>
  token: string
}
