import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Url extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id?: string;

  @Column({
    nullable: false,
  })
  originalURL!: string;

  @Column()
  shortURL!: string;
}
