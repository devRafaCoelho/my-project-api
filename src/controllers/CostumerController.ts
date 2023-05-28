import { Request, Response } from 'express'
import { customerRepository } from '../repositories/customerRepository'
import { BadRequest, NotFound } from '../helpers/api-errors'
import { recordRepository } from '../repositories/recordRepository'

export class CustomerController {
  async register(req: Request, res: Response) {
    const { name, email, cpf, phone, address, complement, zip_code, district, city, uf } = req.body

    const hasEmail = await customerRepository.findOneBy({ email })
    if (hasEmail) throw new BadRequest('E-mail já cadastrado')

    const hasCpf = await customerRepository.findOneBy({ cpf })
    if (hasCpf) throw new BadRequest('CPF já cadastrado')

    const customerData = customerRepository.create({
      name,
      email,
      cpf,
      phone,
      address,
      complement,
      zip_code,
      district,
      city,
      uf
    })

    await customerRepository.save(customerData)

    return res.status(201).json(customerData)
  }

  async getCustomer(req: Request, res: Response) {
    const { id } = req.params

    const customer = await customerRepository.findOneBy({ id: Number(id) })
    if (!customer) throw new NotFound('Cliente não encontrado')

    const records = await recordRepository.findBy({ customerId: id })

    return res.status(200).json(customer)
  }

  async listCustomers(req: Request, res: Response) {
    const customers = await customerRepository.find()

    return res.status(200).json(customers)
  }
}
