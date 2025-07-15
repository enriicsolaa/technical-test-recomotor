import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET as string

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization']
  const token = authHeader?.split(' ')[1]

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' })
  }

  jwt.verify(token, SECRET_KEY, (err) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido o expirado' })
    }
    next()
  })
}
