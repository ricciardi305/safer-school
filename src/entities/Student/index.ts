import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Classroom } from "../Classroom";

@Entity()
export class Student {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false, length: 128 })
  name: string;

  @Column({ nullable: false, name: "birth_date" })
  birthDate: Date;

  @Column({ nullable: false })
  address: string;

  @OneToOne(() => Classroom, { eager: true })
  @JoinTable({ name: "classroom_id" })
  classroomId: string;

  @Column({ name: "entered_at" })
  enteredAt: Date;

  @Column({ name: "left_at" })
  leftAt: Date;

  @CreateDateColumn({
    name: "created_at",
  })
  createdAt: Date;

  constructor(name: string, birthDate: string, address: string) {
    this.name = name;
    this.birthDate = new Date(birthDate);
    this.address = address;
  }
}
