import * as table from 'drizzle-orm/mysql-core'

export const users = table.mysqlTable('users', {
  id: table.int().primaryKey().autoincrement(),
  name: table.varchar('name', {length: 255}).notNull(),
  email: table.varchar('email', {length: 255}).notNull().unique(),
  password: table.varchar('password', {length: 255}).notNull(),
  created_at: table.timestamp().defaultNow(),
  updated_at: table.timestamp().onUpdateNow(),
})
