import axios from 'axios'

export default async function VerifyTokenService(): Promise<boolean> {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_EXPRESS}/verifyToken`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
    return response.data.isValid
  } catch (error) {
    console.error('Error al verificar el token:', error)
    throw error
  }
}