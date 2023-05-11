import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Author } from '../authors/entities/author.entity'
import { CreatePostInput } from './dto/create-post.input'
import { Post } from './entities/posts.entity'
@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepo: Repository<Post>,
    @InjectRepository(Author)
    private authorRepo: Repository<Author>,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postRepo.find()
  }

  create(post: CreatePostInput): Promise<Post> {
    const objectField = this.postRepo.create(post)
    return this.postRepo.save(objectField)
  }

  findOne(id: number): Promise<Post> {
    return this.postRepo.findOne({ where: { id } })
  }

  getAuthor(id: number): Promise<Author> {
    return this.authorRepo.findOne({ where: { id } })
  }
}
