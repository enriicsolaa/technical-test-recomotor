import axios from 'axios'
import type { LoginResponseType } from '../types/LoginResponseType'

export default async function LoginService(userId: string): Promise<LoginResponseType> {
  try {
    const response = await axios.post<LoginResponseType>(`${import.meta.env.VITE_API_EXPRESS}/login`, { userId })
    console.log('Conectado correctamente:', response.data)
    return response.data

  } catch (error) {
    console.error('Error al iniciar sesión:', error)
    throw error
  }
}
