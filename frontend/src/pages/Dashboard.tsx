import Navbar from '../components/Navbar'
import SelectFavorito from '../components/SelectFavorite'

export default function Dashboard() {
  document.title = 'Dashboard | Recomotor'
  return (
    <>
      <Navbar />
      <SelectFavorito />
    </>
  )
}
