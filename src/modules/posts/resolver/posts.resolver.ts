import { Query, Resolver } from '@nestjs/graphql'
import { Post } from '../entities/posts.entity'
import { PostsService } from '../services/posts.service'

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query((returns) => [Post])
  posts() {
    return this.postsService.findAll()
  }
}
