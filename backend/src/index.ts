import express from 'express'
import 'dotenv/config'
import './config/env'
import LoginRoute from './routes/login'
import MarcasRoute from './routes/marcas'
import SetFavoriteRoute from './routes/setFavorite'
import GetFavoritesRoute from './routes/getFavorites'
import VerifyTokenRoute from './routes/verifyToken'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use('/api/login', LoginRoute)
app.use('/api/getMarcas', MarcasRoute)
app.use('/api/getFavorites', GetFavoritesRoute)
app.use('/api/setFavorite', SetFavoriteRoute)
app.use('/api/verifyToken', VerifyTokenRoute)

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})