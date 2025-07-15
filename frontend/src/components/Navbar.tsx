import { NavLink, useNavigate } from 'react-router'
import Logo from './Logo'

export default function Navbar() {

  const navigate = useNavigate()

  const handleLogout = () => {
    console.log('Cerrando sesión...a')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('userId')
    navigate('/', { replace: true })
  }
  return (
    <section className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <Logo />
          <nav className="flex space-x-5">
            <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-green-600 font-bold" : "font-bold"}>
              Dashboard
            </NavLink>
            <NavLink to="/admin" className={({ isActive }) => isActive ? "text-green-600 font-bold" : "font-bold"}>
              Admin
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <p className="hidden md:block">Hola, {localStorage.getItem('user')}</p>
          <button className="hidden md:block bg-green-700 px-5 py-1 rounded-lg cursor-pointer hover:bg-green-800" onClick={handleLogout}>Cerrar Sesión</button>
          <button className="md:hidden bg-green-700 px-5 py-1 rounded-lg cursor-pointer hover:bg-green-800" onClick={handleLogout}>➡</button>
        </div>
      </div>
    </section>

  )
}