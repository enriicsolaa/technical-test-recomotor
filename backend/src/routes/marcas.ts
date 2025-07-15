import { Router } from 'express'
import { authenticateToken } from './../middlewares/auth'
import errorHandler from '../services/errorHandler'
import { connectDb } from '../config/db'
import { marcas, modelos } from '../db/schema'
import { eq } from 'drizzle-orm'
import processCarData from '../services/processCarData'

const router = Router()
router.get('/', authenticateToken, async (req, res) => {
  try {
    const db = await connectDb()
    const results = await db.select().from(marcas).leftJoin(modelos, eq(marcas.id, modelos.marcaId)).orderBy(marcas.id)

    const parsedCarData = processCarData(results)

    res.json({
      message: 'Lista de marcas',
      data: parsedCarData,
    })
  } catch (err) {
    errorHandler(err, res, 'Error al obtener las marcas')
  }
})

export default router