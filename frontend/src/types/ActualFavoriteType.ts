export interface UserData {
  empleadoId: number
  empleadoNombre: string
  modeloId: number
  modeloNombre: string
  modeloTipo: string
  modeloImg: string
  marcaId: number
  marcaNombre: string
}

export interface ActualFavoriteType {
  message: string
  data: UserData[]
}