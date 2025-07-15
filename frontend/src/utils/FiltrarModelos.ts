import type { Modelo, ModeloResponse } from '../types/ModelsType'

export function filtrarModelos(data: ModeloResponse, marcaFiltro: string, tipoFiltro: string): Modelo[] {
  const result = data.data
    .filter(marca => marcaFiltro === "all" || marca.nombre.toLowerCase() === marcaFiltro.toLowerCase())
    .flatMap(marca =>
      marca.modelos
        .filter(modelo =>
          tipoFiltro === "all" || modelo.tipo.toLowerCase() === tipoFiltro.toLowerCase()
        )
        .map(modelo => ({
          ...modelo,
          marca: marca.nombre
        }))
    )
    return result
}
