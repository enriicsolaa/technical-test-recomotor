import { Router } from 'express'
import { authenticateToken } from '../middlewares/auth'
import errorHandler from '../services/errorHandler'
import { connectDb } from '../config/db'
import { marcas, modelos, favoritos, empleados } from '../db/schema'
import { eq } from 'drizzle-orm'

const router = Router()
router.get('/', authenticateToken, async (req, res) => {
  try {
    const db = await connectDb()
    const results = await db.select({
      empleadoId: empleados.id,
      empleadoNombre: empleados.nombre,
      modeloId: modelos.id,
      modeloNombre: modelos.nombre,
      modeloTipo: modelos.tipo,
      modeloImg: modelos.img,
      marcaId: marcas.id,
      marcaNombre: marcas.nombre
    }).from(empleados).leftJoin(favoritos, eq(empleados.id, favoritos.empleadoId))
      .leftJoin(modelos, eq(favoritos.modeloId, modelos.id))
      .leftJoin(marcas, eq(modelos.marcaId, marcas.id))


    res.json({
      message: 'Lista de usuarios con modelos favoritos',
      data: results,
    })
  } catch (err) {
    errorHandler(err, res, 'Error al obtener la lista de usuarios con modelos favoritos')
  }
})

export default router
