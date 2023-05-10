import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, MaxLength } from 'class-validator'

@InputType()
export class CreatePostInput {
  @MaxLength(255)
  @IsNotEmpty({
    message: 'Title is required',
  })
  @Field()
  title: string

  @Field({ nullable: true })
  content?: string
}
