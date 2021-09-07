import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Basket } from "./Basket";
import { User } from "./User";

@Entity()
export class BasketProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Basket)
  @JoinColumn()
  basket: Basket;
}
