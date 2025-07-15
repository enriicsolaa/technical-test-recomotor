import { mysqlTable, int, varchar } from 'drizzle-orm/mysql-core'

export const empleados = mysqlTable('empleados', {
  id: int('id').primaryKey(),
  nombre: varchar('nombre', { length: 255 }).notNull()
})
