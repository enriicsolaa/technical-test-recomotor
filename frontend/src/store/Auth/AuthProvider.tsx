import { useState, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from './AuthContext'
import type { AuthContextType } from '../../types/AuthContextType'

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'))
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setIsAuthenticated(false)
        setIsLoading(false)
        return
      }

      try {
        const response = await axios.get(`${import.meta.env.VITE_API_EXPRESS}/verifyToken`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setIsAuthenticated(response.status === 200)
      } catch (error) {
        console.error('Error verificando token:', error)
        setIsAuthenticated(false)
        localStorage.removeItem('token')
        setToken(null)
      } finally {
        setIsLoading(false)
      }
    }

    verifyToken()
  }, [token])

  const login = (jwtToken: string) => {
    localStorage.setItem('token', jwtToken)
    setToken(jwtToken)
    setIsAuthenticated(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setIsAuthenticated(false)
  }

  const value: AuthContextType = {
    token,
    login,
    logout,
    isAuthenticated,
    isLoading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}