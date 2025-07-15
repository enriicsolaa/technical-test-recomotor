import { useEffect, useState } from 'react'
import ModelsService from '../services/ModelsService'
import { getListaMarcas, getTiposMotores } from '../utils/getFavouriteSelectors'
import { filtrarModelos } from '../utils/FiltrarModelos'
import type { Modelo, ModeloResponse } from '../types/ModelsType'
import FavoriteService from '../services/FavoriteService'
import { getCurrentFavoriteModel } from '../utils/getCurrentFavoriteModel'
import { useNavigate } from 'react-router'
import CarCard from './CarCard'

export default function SelectFavorito() {

  const navigate = useNavigate()

  const [modeloResponse, setModeloResponse] = useState<ModeloResponse>({ message: '', data: [] })

  const [marcas, setMarcas] = useState<string[]>([])
  const [motores, setMotores] = useState<string[]>([])

  const [filterMarca, setFilterMarca] = useState("all")
  const [filterMotor, setFilterMotor] = useState("all")

  const [listaFiltrada, setListaFiltrada] = useState<Modelo[]>([])
  const [currentFavorite, setCurrentFavorite] = useState<number | undefined>(0)


  useEffect(() => {
    ModelsService().then(res => {
      if (modeloResponse.data.length === 0) setModeloResponse(res.data) 
      if (res.data) {
        const marcas = getListaMarcas(res.data)
        const motores = getTiposMotores(res.data)
        getCurrentFavoriteModel().then(_modelId => setCurrentFavorite(_modelId))
        setMarcas(marcas)
        setMotores(motores)
      } else {
        console.error('No se obtuvieron modelos válidos')
      }
    }
    )
  }, [modeloResponse.data])

  useEffect(() => {
    const filtredModels = filtrarModelos(modeloResponse, filterMarca, filterMotor)
    setListaFiltrada(filtredModels)
  }, [filterMarca, filterMotor, modeloResponse])


  const handleFiltroChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedName = e.target.name
    const selectedValue = e.target.value

    if (selectedName === 'marca') setFilterMarca(selectedValue)
    if (selectedName === 'motor') setFilterMotor(selectedValue)
  }

  const handleSetFavourite = (userId: number, modelId: number)  => {
    FavoriteService(userId, modelId)
    navigate(0)
  }

  return (
    <section className="bg-gray-300 min-h-[calc(100vh-64px)] flex flex-col items-center space-y-6">
        <div className="flex flex-col items-center space-y-2 mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Selecciona tu Coche Favorito</h2>
          <p className="text-gray-600 mt-1">Encuentra el coche perfecto para ti</p>
        </div>

        {/* Filtres */} 
        <div className="flex flex-col items-center space-y-4 bg-white px-6 py-2 rounded-4xl shadow-md">
          
        <div className="flex items-center space-x-12">
          <div className='flex space-x-2 items-center'>
            <label className="text-md font-semibold text-gray-800">Marca:</label>
            <select defaultValue="all" name="marca" id="marca" onChange={handleFiltroChange} className="border border-gray-300 rounded-lg px-3 py-1 cursor-pointer">
              <option value="all" defaultChecked>Todos</option>
              {marcas.map((marca, index) => (
                <option key={index} value={marca}>{marca}</option>
              ))}
            </select>
          </div>
          
          <div className='flex space-x-2 items-center'>
            <label className="text-md font-semibold text-gray-800">Motor:</label>
            <select defaultValue="all" name="motor" id="motor" onChange={handleFiltroChange} className="border border-gray-300 rounded-lg px-3 py-1 cursor-pointer">
              <option value="all" defaultChecked>Todos</option>
              {motores.map((motor, index) => (
                <option key={index} value={motor}>{motor}</option>
              ))}
            </select>
          </div>
        </div>

        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 xl:max-w-[60%]">

          {listaFiltrada.map((modelo, index) => (
            <CarCard key={index} modelo={modelo} currentFavorite={currentFavorite} handleSetFavourite={handleSetFavourite} />
          ))}
        </div>
    </section>
  )
}