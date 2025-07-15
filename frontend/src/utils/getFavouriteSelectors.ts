interface Modelo {
  id: number
  nombre: string
  tipo: string
  img: string
  marcaId: number
}

interface Marca {
  id: number
  nombre: string
  modelos: Modelo[]
}

interface ModeloResponse {
  message: string
  data: Marca[]
}

export function getListaMarcas(res: ModeloResponse): string[] {
  const nombres = res.data.map(marca => marca.nombre)
  return nombres
}

export function getTiposMotores(res: ModeloResponse): string[] {
  const tiposMotores = [...new Set(res.data.flatMap(marca => marca.modelos.map(modelo => modelo.tipo)))]
  const tiposCapitalizados = tiposMotores.map(motor => motor.charAt(0).toUpperCase() + motor.slice(1))
  return tiposCapitalizados
}