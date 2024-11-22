import { IUser } from '@/app/interfaces/user.interface'

export interface IAuth {
  user: Pick<IUser, 'id' | 'name' | 'email' | 'created_at' | 'updated_at'>
  token: string
}
