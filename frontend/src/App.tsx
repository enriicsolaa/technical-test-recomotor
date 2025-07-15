import { Route, Routes } from 'react-router'
import { Dashboard, Admin, Home } from './pages'
import PrivateRoute from './routes/PrivateRoute'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    <div><Toaster position="bottom-right" reverseOrder={ false }/></div>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/dashboard" element={ <PrivateRoute><Dashboard /></PrivateRoute> } />
      <Route path="/admin" element={ <PrivateRoute><Admin /></PrivateRoute> } />
    </Routes>
    </>
  )
}

export default App
