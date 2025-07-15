import axios from 'axios'

export default async function ModelsService() {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_EXPRESS}/getMarcas`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    return response
  } catch (error) {
    console.error('Error al verificar el token:', error)
    throw error
  }
}