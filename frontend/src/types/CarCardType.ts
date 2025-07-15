import type { Modelo } from './ModelsType'

export interface CarCardType {
  modelo: Modelo
  currentFavorite: number | undefined
  handleSetFavourite: (userId: number, modelId: number) => void
}