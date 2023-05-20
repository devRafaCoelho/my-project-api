import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm'
import { Customer } from './Customer'

@Entity('records')
export class Record {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 500 })
  description: string

  @Column({ type: 'date' })
  due_date: Date

  @Column({ type: 'numeric' })
  value: number

  @Column({ type: 'boolean' })
  paid_out: boolean

  @ManyToOne(() => Customer, (customer) => customer.records, { onDelete: 'CASCADE' })
  customer: Customer
}
