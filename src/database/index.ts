import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { ENV } from '@/config/env'

const connection: mysql.Connection = await mysql.createConnection({
  host: ENV.DB.HOST,
  port: ENV.DB.PORT,
  user: ENV.DB.USER,
  password: ENV.DB.PASSWORD,
  database: ENV.DB.DATABASE,
})

export const db = drizzle(connection)
