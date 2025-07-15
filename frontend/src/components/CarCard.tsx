import type { CarCardType } from '../types/CarCardType'


export default function CarCard({ modelo, currentFavorite, handleSetFavourite }: CarCardType) {

  return(
    <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center space-y-3">
      <div className="h-30 overflow-hidden rounded-sm relative flex items-center justify-center">
        <img alt={modelo.nombre} src={`/coches/${modelo.img}`} />
      </div>
      <p>{`${modelo.marca?.toUpperCase()} ${modelo.nombre}`}</p>
      <p>Motor: {modelo.tipo}</p>
      {currentFavorite === modelo.id && <button className="bg-green-600 text-white px-3 py-2 rounded-md opacity-25">Actual favorito</button>}
      {currentFavorite !== modelo.id && <button onClick={() => {
        handleSetFavourite(Number(localStorage.getItem('userId')), modelo.id)
        }}
        className="bg-green-600 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-green-700">
        Seleccionar
        </button>
      }
    </div>
  )
}