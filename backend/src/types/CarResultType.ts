export type CarResultType = {
  marcas: {
    id: number
    nombre: string
  }
  modelos: {
    id: number
    nombre: string
    tipo: string
    img: string
    marcaId: number
  } | null
}[]