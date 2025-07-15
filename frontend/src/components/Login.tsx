import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import LoginService from '../services/LoginService'
import { toast } from 'react-hot-toast'
import Logo from './Logo'

export default function Login() {
  const [userId, setUserId] = useState('')
  const [checkingToken, setCheckingToken] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {

      navigate('/dashboard', { replace: true })
    } else {
      setCheckingToken(false)
    }
  }, [navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const { token, user } = await LoginService(userId)
      localStorage.setItem('token', token)
      localStorage.setItem('user', user.nombre)
      localStorage.setItem('userId', user.id.toString())
      navigate('/dashboard')
      navigate(0)

    } catch (err) {
      console.error('Error al iniciar sesión:', err)
      toast.error("Usuario no encontrado.")
    }
  }

  if (checkingToken) {
    return null
  }

  return (
    <section className="bg-gray-300 min-h-screen flex flex-col items-center justify-center space-y-12">
      <Logo />
      <div className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl mb-4">Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className="flex flex-col m-5 space-y-4">
          <input
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="ID de Usuario"
            className="border p-2 rounded"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer">
            Iniciar sesión
          </button>
        </form>
      </div>
    </section>
  )
}
