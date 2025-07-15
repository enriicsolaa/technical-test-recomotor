import { Router } from 'express'
import errorHandler from '../services/errorHandler'
import jwt from 'jsonwebtoken'

const router = Router()
router.get('/', async (req, res) => {
  const authHeader = req.headers['authorization']
  const token = authHeader?.split(' ')[1]

  try {
    const verifiedToken = jwt.verify(token as string, process.env.JWT_SECRET as string)
    return res.status(200).json({ message: 'Token verificado correctamente', isValid: true, data: verifiedToken })

  } catch (err) {
    return res.status(403).json({ error: 'Token inválido o expirado', isValid: false })
  }
})

export default router
