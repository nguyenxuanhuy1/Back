import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @Column({nullable: true})
    des: string;

    @Column()
    link:string;

    @Column()
    price: number;

    @Column()
    pricesale:number;
}
