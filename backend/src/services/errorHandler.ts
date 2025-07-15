import { z } from 'zod'
import { Response } from 'express'

export default function errorHandler(err: unknown, res: Response, message?: string) {

  if (err instanceof z.ZodError) {
    return res.status(400).json({
      error: 'Datos inválidos',
      details: err.issues.map(e => ({
        field: e.path.join('.'),
        message: e.message
      }))
    })
  }
  console.error('Error al procesar la solicitud:', err)
  res.status(500).json({ error: message || 'Error interno del servidor' })
}
