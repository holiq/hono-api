import { ENV } from '@/config/env'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  dbCredentials: {
    host: ENV.DB.HOST,
    port: ENV.DB.PORT,
    user: ENV.DB.USER,
    password: ENV.DB.PASSWORD,
    database: ENV.DB.DATABASE,
    ssl: 'allow',
  },
  schema: './src/database/schema',
  out: './src/database/migrations',
})