import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm/dist'
import { Post } from './entities/posts.entity'
import { PostsResolver } from './resolver/posts.resolver'
import { PostsService } from './services/posts.service'

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostsService, PostsResolver],
})
export class PostsModule {}
