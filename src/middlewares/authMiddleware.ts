import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { Unauthorized } from '../helpers/api-errors'
import { userRepository } from '../repositories/userRepository'

type JwtPayload = {
  id: number
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers

  if (!authorization) {
    throw new Unauthorized('Não autorizado')
  }

  const token = authorization.split(' ')[1]

  const { id } = jwt.verify(token, process.env.JWT_PASS ?? '') as JwtPayload

  const user = await userRepository.findOneBy({ id })

  if (!user) {
    throw new Unauthorized('Não autorizado')
  }

  const { password: _, ...loggedUser } = user

  req.user = loggedUser

  next()
}
