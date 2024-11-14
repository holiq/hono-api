import { config } from 'dotenv'

config()

export const ENV = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: process.env.JWT_SECRET || 'default_secret',
  DB: {
    CONNECTION: process.env.DB_CONNECTION || 'mysql',
    HOST: process.env.DB_HOST || 'localhost',
    USER: process.env.DB_USER || 'root',
    PASSWORD: process.env.DB_PASS || '',
    NAME: process.env.DB_NAME || '',
  },
}
