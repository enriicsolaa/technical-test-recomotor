import { z } from 'zod'
import { eq } from 'drizzle-orm'
import { connectDb } from '../config/db'
import { favoritos } from '../db/schema'

export default async function setFavouriteModel(userId: number, modeloId: number) {
  const parsedUserId = z.number().parse(userId)
  const parsedModeloId = z.number().parse(modeloId)

  try {
    const db = await connectDb()
    const existing = await db.select().from(favoritos).where(eq(favoritos.empleadoId, parsedUserId))

    if (existing.length === 0) {
      await db.insert(favoritos).values({ empleadoId: parsedUserId, modeloId: parsedModeloId })
    } else {
      await db.update(favoritos).set({ modeloId: parsedModeloId }).where(eq(favoritos.empleadoId, parsedUserId))
    }

    return {
      message: 'Modelo favorito creado/actualizado correctamente',
      data: { empleadoId: parsedUserId, modeloId: parsedModeloId }
    };
  } catch (err) {
    console.error('Error en setFavouriteModel:', err)
    throw new Error('Error al asignar modelo favorito')
  }
}
