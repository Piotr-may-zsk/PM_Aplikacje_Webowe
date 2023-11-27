import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm"
import {User} from "./User";

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    date: Date

    @Column()
    location: string

    @ManyToMany(()=> User)
    @JoinTable()
    users: User[]
}