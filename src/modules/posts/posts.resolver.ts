import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql'
import { Author } from '../authors/entities/author.entity'
import { CreatePostInput } from './dto/create-post.input'
import { Post } from './entities/posts.entity'
import { PostsService } from './posts.service'

@Resolver((of) => Post)
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

  @ResolveField((returns) => Author)
  author(@Parent() post: Post): Promise<Author> {
    return this.postsService.getAuthor(post.authorId)
  }
}
