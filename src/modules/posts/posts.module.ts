import { Module } from '@nestjs/common'
import { PostsResolver } from './resolver/posts.resolver'
import { PostsService } from './services/posts.service'

@Module({
  providers: [PostsService, PostsResolver],
})
export class PostsModule {}
