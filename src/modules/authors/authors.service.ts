import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateAuthorInput } from './dto/create-author.input'
import { UpdateAuthorInput } from './dto/update-author.input'
import { Author } from './entities/author.entity'

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author) private authorRepo: Repository<Author>,
  ) {}

  create(createAuthorInput: CreateAuthorInput): Promise<Author> {
    const objectField = this.authorRepo.create(createAuthorInput)
    return this.authorRepo.save(objectField)
  }

  findAll(): Promise<Author[]> {
    return this.authorRepo.find()
  }

  findOne(id: number): Promise<Author> {
    return this.authorRepo.findOne({ where: { id } })
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`
  }

  remove(id: number) {
    return `This action removes a #${id} author`
  }
}
