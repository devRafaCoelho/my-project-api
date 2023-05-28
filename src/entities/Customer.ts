import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Record } from './Record'

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 100 })
  name: string

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string

  @Column({ type: 'char', length: 11, unique: true })
  cpf: string

  @Column({ type: 'char', length: 11 })
  phone: string

  @Column({ type: 'varchar', length: 100, nullable: true })
  address: string

  @Column({ type: 'varchar', length: 50, nullable: true })
  complement: string

  @Column({ type: 'char', length: 8, nullable: true })
  zip_code: string

  @Column({ type: 'varchar', length: 30, nullable: true })
  district: string

  @Column({ type: 'varchar', length: 30, nullable: true })
  city: string

  @Column({ type: 'varchar', length: 2, nullable: true })
  uf: string

  @OneToMany(() => Record, (record) => record.customer)
  records: Record[]
}
