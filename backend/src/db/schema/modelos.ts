import { mysqlTable, int, varchar, text } from 'drizzle-orm/mysql-core'
import { marcas } from './marcas'

// millor ficar autoincremental
export const modelos = mysqlTable('modelos', {
  id: int('id').primaryKey(),
  nombre: varchar('nombre', { length: 100 }).notNull(),
  tipo: varchar('tipo', { length: 20 }).notNull(),
  img: text('img').notNull(),
  marcaId: int('marca_id').notNull().references(() => marcas.id)
})
