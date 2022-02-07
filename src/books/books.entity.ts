import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field((type) => String)
  name: string;

  @Column()
  @Field((type) => String)
  author: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  dateCreated?: string;
}
