import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Unique } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // @Column()
  // job: string;

  // @Column()
  // bio: string;
}
