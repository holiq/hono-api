import { defineConfig } from 'drizzle-kit'
import { ENV } from '@/config/env'

export default defineConfig({
  dialect: 'mysql',
  dbCredentials: {
    host: ENV.DB.HOST,
    port: ENV.DB.PORT,
    user: ENV.DB.USER,
    password: ENV.DB.PASSWORD,
    database: ENV.DB.DATABASE,
  },
  schema: './src/database/schema',
  out: './src/database/migrations',
})