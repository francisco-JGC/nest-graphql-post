import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number

  @Column({ type: 'varchar', length: 255 })
  @Field()
  title: string

  @Column({ type: 'text', nullable: true })
  @Field()
  content?: string
}
