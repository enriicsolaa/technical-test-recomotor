import { defineConfig } from 'drizzle-kit'
import './src/config/env'

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema',
  dialect: 'mysql',
  dbCredentials: {
    host: process.env.MARIADB_HOST,
    port: Number(process.env.MARIADB_PORT),
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE
  }
})