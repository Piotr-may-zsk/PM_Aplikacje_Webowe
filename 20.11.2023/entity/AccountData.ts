import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class AccountData {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'date' })
    createdAt: Date

    @Column()
    address: string

    @Column()
    bio: string
}