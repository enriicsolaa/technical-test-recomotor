import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import { MySql2Database } from 'drizzle-orm/mysql2'
import { empleados, favoritos, marcas, modelos } from '../db/schema'

let db: MySql2Database | null = null

export async function connectDb(): Promise<MySql2Database> {
  if (db) {
    return db
  }

  const poolConnection = await mysql.createPool({
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    port: Number(process.env.MARIADB_PORT),
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  })

  db = drizzle(poolConnection)
  return db
}