import { z } from 'zod'
import 'dotenv/config'

const envSchema = z.object({
  PORT: z.coerce.number().default(3000),
  MARIADB_HOST: z.string(),
  MARIADB_PORT: z.coerce.number().default(3306),
  MARIADB_USER: z.string(),
  MARIADB_PASSWORD: z.string(),
  MARIADB_DATABASE: z.string()
})
envSchema.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
