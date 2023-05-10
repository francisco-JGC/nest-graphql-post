import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreatePostInput } from './dto/create-post.input'
import { Post } from './entities/posts.entity'
import { PostsService } from './posts.service'

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query((returns) => [Post])
  posts() {
    return this.postsService.findAll()
  }

  @Query((returns) => Post)
  findPostById(@Args('id', { type: () => Int }) id: number) {
    return this.postsService.findOne(id)
  }

  @Mutation((returns) => Post)
  createPost(@Args('postInput') postInput: CreatePostInput) {
    return this.postsService.create(postInput)
  }
}
