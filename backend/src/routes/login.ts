import { Router } from 'express'
import { z } from 'zod'
import jwt from 'jsonwebtoken'
import { connectDb } from '../config/db'
import { empleados } from '../db/schema'
import { eq } from 'drizzle-orm'
import errorHandler from '../services/errorHandler'

const router = Router()
const userIdSchema = z.object({
  userId: z.coerce.number().int({ message: 'userId debe ser un número entero' })
})

router.post('/', async (req, res) => {
  try {
    const { userId } = userIdSchema.parse(req.body)

    const db = await connectDb()
    const selectedUser = await db
      .select()
      .from(empleados)
      .where(eq(empleados.id, userId))

    if (selectedUser.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado' })
    }

    const user = selectedUser[0]
    const token = jwt.sign({ id: user.id, nombre: user.nombre }, process.env.JWT_SECRET as string, { expiresIn: '1h' })

    res.json({
      message: 'Login Usuario autenticado correctamente',
      user,
      token
    })
  } catch (err) {
    errorHandler(err, res)
  }
})

export default router
