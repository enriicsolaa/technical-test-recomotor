import { mysqlTable, int, primaryKey } from 'drizzle-orm/mysql-core'
import { empleados } from './empleados'
import { modelos } from './modelos'

export const favoritos = mysqlTable('favoritos', {
    empleadoId: int('empleado_id').notNull().references(() => empleados.id, { onDelete: 'cascade' }),
    modeloId: int('modelo_id').notNull().references(() => modelos.id, { onDelete: 'cascade' })
  },
  (table) => [primaryKey({ columns: [table.empleadoId, table.modeloId] })]

)
