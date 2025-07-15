import { Router } from 'express'
import { z } from 'zod'
import { authenticateToken } from '../middlewares/auth'
import errorHandler from '../services/errorHandler'
import setFavouriteModel from '../services/setFavouriteModel'

const router = Router()
const inputSchema = z.object({
  userId: z.coerce.number().int({ message: 'userId debe ser un número entero' }),
  modelId: z.coerce.number().int({ message: 'modeloId debe ser un número entero' })
})

router.post('/', authenticateToken, async (req, res) => {

  const { userId , modelId } = inputSchema.parse(req.body)

  try {
    await setFavouriteModel(userId, modelId)

    res.status(200).json({
      message: 'Modelo favorito asignado correctamente',
      data: { empleadoId: userId, modeloId: modelId }
    })
  } catch (err) {
    errorHandler(err, res, 'Error al asignar modelo favorito')
  }
})

export default router