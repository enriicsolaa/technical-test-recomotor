import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core'

export const marcas = mysqlTable('marcas', {
  id: int('id').primaryKey(),
  nombre: varchar('nombre', { length: 100 }).notNull(),
})
