import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'varchar', length: 100 })
  name: string

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string

  @Column({ type: 'char', length: 11, nullable: true, unique: true })
  cpf: string

  @Column({ type: 'char', length: 11, nullable: true })
  phone: string

  @Column({ type: 'text' })
  password: string
}
