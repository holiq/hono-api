import * as table from 'drizzle-orm/pg-core'

export const users = table.pgTable('users', {
  id: table.integer().primaryKey().generatedAlwaysAsIdentity(),
  name: table.varchar('name', {length: 255}).notNull(),
  email: table.varchar('email', {length: 255}).notNull().unique(),
  password: table.varchar('password', {length: 255}).notNull(),
  created_at: table.timestamp(),
  updated_at: table.timestamp(),
})
