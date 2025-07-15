import { useEffect, useState } from 'react'
import GetCurrentFavoritesService from '../services/GetCurrentFavoritesService'
import type { ActualFavoriteType } from '../types/ActualFavoriteType'
import BadgeSpan from './BadgeSpan'

export default function UsersTable() {

  const [users, setUsers] = useState<ActualFavoriteType>({ message: '', data: [] })

  useEffect(() => {
    GetCurrentFavoritesService().then(res => {
        setUsers(res)
      })
  }, [])

  return(
    <section className="bg-gray-300 min-h-[calc(100vh-64px)] flex flex-col items-center space-y-6">
      <div className="flex flex-col items-center space-y-2 mt-12">
        <h2 className="text-2xl font-bold text-gray-900">Tabla de usuarios</h2>
      </div>

      <div className="p-5 bg-white rounded-2xl">
        <table className="min-w-full">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">ID</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Nombre</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Marca</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Modelo</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Tipo</th>
            </tr>
          </thead>
          <tbody>
            {users.data.map((user, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{user.empleadoId}</td>
                <td className="px-6 py-4 text-sm">{user.empleadoNombre}</td>
                <td className="px-6 py-4 text-sm">{user.marcaNombre}</td>
                <td className="px-6 py-4 text-sm">{user.modeloNombre}</td>
                <td className="px-6 py-4 text-sm">
                  {user.modeloTipo === 'gasolina' && <BadgeSpan className="bg-green-100 text-green-700">{user.modeloTipo}</BadgeSpan>}
                  {user.modeloTipo === 'diesel' && <BadgeSpan className="bg-gray-100 text-gray-700">{user.modeloTipo}</BadgeSpan>}
                  {user.modeloTipo === 'hibrido' && <BadgeSpan className="bg-red-100 text-red-700">{user.modeloTipo}</BadgeSpan>}
                  {user.modeloTipo === 'electrico' && <BadgeSpan className="bg-yellow-100 text-yellow-700">{user.modeloTipo}</BadgeSpan>}
                  {user.modeloTipo === 'hidrogeno' && <BadgeSpan className="bg-blue-100 text-blue-700">{user.modeloTipo}</BadgeSpan>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )

}