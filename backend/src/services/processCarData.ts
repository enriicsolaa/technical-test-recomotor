import { CarResultType } from '../types/CarResultType'
import { ProcessedCarType } from '../types/ProcessedCarType'

export default function processCarData(result: CarResultType): ProcessedCarType {
  const marcasMap = new Map<number, {
    id: number
    nombre: string
    modelos: {
      id: number
      nombre: string
      tipo: string
      img: string
      marcaId: number
    }[]
  }>()

  result.forEach(item => {
    const marca = item.marcas
    const modelo = item.modelos
    if (!marcasMap.has(marca.id)) {
      marcasMap.set(marca.id, {
        id: marca.id,
        nombre: marca.nombre,
        modelos: []
      })
    }
    if (modelo) {
      marcasMap.get(marca.id)!.modelos.push(modelo)
    }
  })

  return Array.from(marcasMap.values())
}