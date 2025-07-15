import axios from 'axios'
import type { FavoriteResponse } from '../types/FavoriteResponseType'

export default async function FavoriteService(userId: number, modelId: number): Promise<FavoriteResponse> {
  try {
    const response = await axios.post<FavoriteResponse>(`${import.meta.env.VITE_API_EXPRESS}/setFavorite`, { userId, modelId }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    return response.data

  } catch (error) {
    console.error('Error al actualizar modelo favorito:', error)
    throw error
  }
}
