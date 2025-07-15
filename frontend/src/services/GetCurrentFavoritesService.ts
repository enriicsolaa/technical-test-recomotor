import axios from 'axios'
import type { ActualFavoriteType } from '../types/ActualFavoriteType'

export default async function GetCurrentFavoritesService(): Promise<ActualFavoriteType> {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_EXPRESS}/getFavorites`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    return response.data
  } catch (error) {
    console.error('Error al obtener los favoritos actuales:', error)
    throw error
  }
}
