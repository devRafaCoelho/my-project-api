import { Request, Response } from 'express'
import { BadRequest, NotFound, Ok } from '../helpers/api-errors'
import { userRepository } from '../repositories/userRepository'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class UserController {
  async register(req: Request, res: Response) {
    const { name, email, password } = req.body

    const hasUser = await userRepository.findOneBy({ email })
    if (hasUser) throw new BadRequest('E-mail já existe')

    const hashPassword = await bcrypt.hash(password, 10)

    const userData = userRepository.create({
      name,
      email,
      password: hashPassword
    })

    await userRepository.save(userData)

    const { password: _, ...user } = userData

    return res.status(201).json(user)
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body

    const user = await userRepository.findOneBy({ email })
    if (!user) throw new BadRequest('E-mail ou senha inválidos')

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) throw new BadRequest('E-mail ou senha inválidos')

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? '', {
      expiresIn: '8h'
    })

    const { password: _, ...userData } = user

    return res.json({
      user: userData,
      token: token
    })
  }

  async getUserdata(req: Request, res: Response) {
    return res.json(req.user)
  }

  async updateUser(req: Request, res: Response) {
    const { name, email, password, cpf, phone } = req.body
    const { id } = req.user

    const user = await userRepository.findOneBy({ id })
    if (!user) throw new NotFound('Usuário não encontrado')

    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) throw new BadRequest('Senha inválida')

    const hasEmailUser = await userRepository.findOneBy({ email })
    if (hasEmailUser && hasEmailUser.id !== user.id) throw new BadRequest('E-mail já cadastrado')

    const hasCpfUser = await userRepository.findOneBy({ cpf })
    if (hasCpfUser && hasCpfUser.id !== user.id) throw new BadRequest('CPF já cadastrado')

    user.name = name
    user.email = email
    user.cpf = cpf
    user.phone = phone

    await userRepository.save(user)

    throw new Ok('Dados atualizados com sucesso!')
  }

  async deleteUser(req: Request, res: Response) {
    const user = await userRepository.findOneBy({ id: req.user.id })
    if (!user) throw new NotFound('Usuário não encontrado')

    await userRepository.delete({ id: user.id })

    throw new Ok('Conta excluída com sucesso!')
  }
}
