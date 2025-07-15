import Navbar from '../components/Navbar'
import UsersTable from '../components/UsersTable'

export default function Admin() {
  document.title = 'Admin | Recomotor'
  return (
    <>
      <Navbar />
      <UsersTable />
    </>
  )
}

