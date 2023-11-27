import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm"
import {User} from "./User";
import {Image} from "./Image";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    content: string

    @ManyToOne(()=> User)
    owner: User

    @ManyToOne(()=> Image)
    image: Image


}