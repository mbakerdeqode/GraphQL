import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Books } from './books.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Books])],
  providers: [BooksService, BooksResolver],
})
export class BooksModule {}
