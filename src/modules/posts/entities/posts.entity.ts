import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Author } from 'src/modules/authors/entities/author.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('posts')
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

  @Column()
  @Field((type) => Int)
  authorId: number

  @ManyToOne(() => Author, (author) => author.posts)
  @Field()
  author: Author
}
