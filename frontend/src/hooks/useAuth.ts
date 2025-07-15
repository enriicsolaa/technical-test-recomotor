import { useContext } from 'react'
import { AuthContext } from '../store/Auth/AuthContext'

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth tiene que estar dentro de AuthProvider')
  }
  return context
}
