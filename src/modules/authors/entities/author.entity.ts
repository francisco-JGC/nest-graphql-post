import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Post } from 'src/modules/posts/entities/posts.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('authors')
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number

  @Column({ length: 25 })
  @Field()
  name: string

  @OneToMany(() => Post, (post) => post.author)
  @Field(() => [Post], { nullable: true })
  posts: Post[]
}
