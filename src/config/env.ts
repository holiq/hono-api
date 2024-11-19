import { EnvType } from '@/types/env'
import { config } from 'dotenv'

config()

export const ENV: EnvType = {
  PORT: Number(process.env.PORT) || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'default_secret',
  DB: {
    HOST: process.env.DB_HOST || 'localhost',
    PORT: Number(process.env.DB_PORT) || 3306,
    USER: process.env.DB_USER || 'root',
    PASSWORD: process.env.DB_PASSWORD || undefined,
    DATABASE: process.env.DB_DATABASE || '',
  },
}
