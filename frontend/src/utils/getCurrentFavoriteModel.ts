import GetCurrentFavoritesService from '../services/GetCurrentFavoritesService'

export async function getCurrentFavoriteModel() {
  const { data } = await GetCurrentFavoritesService()
  const userObj = data.find(user => user.empleadoId === Number(localStorage.getItem('userId')))
  return userObj?.modeloId

}