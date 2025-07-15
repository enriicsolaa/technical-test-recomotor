export interface Modelo {
  id: number
  nombre: string
  tipo: string
  img: string
  marcaId: number
  marca?: string
}

export interface Marca {
  id: number
  nombre: string
  modelos: Modelo[]
}

export interface ModeloResponse {
  message: string
  data: Marca[]
}