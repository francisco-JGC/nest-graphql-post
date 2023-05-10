import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthorsResolver } from './authors.resolver'
import { AuthorsService } from './authors.service'
import { Author } from './entities/author.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Author])],
  providers: [AuthorsResolver, AuthorsService],
})
export class AuthorsModule {}
