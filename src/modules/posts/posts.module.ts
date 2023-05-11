import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm/dist'
import { AuthorsModule } from '../authors/authors.module'
import { Author } from '../authors/entities/author.entity'
import { Post } from './entities/posts.entity'
import { PostsResolver } from './posts.resolver'
import { PostsService } from './posts.service'

@Module({
  imports: [TypeOrmModule.forFeature([Post, Author]), AuthorsModule],
  providers: [PostsService, PostsResolver],
})
export class PostsModule {}
