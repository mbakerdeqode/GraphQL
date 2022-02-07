import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Books } from './books.entity';
import { AddBookInput } from './dto/book.input';
@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Books) private bookRepository: Repository<Books>,
  ) {}

  addBooks(createBookInput: AddBookInput): Promise<Books> {
    const saveResult = this.bookRepository.create(createBookInput);
    console.log('SaveResult --> ', saveResult);
    return this.bookRepository.save(saveResult);
  }
  async findAll(): Promise<Books[]> {
    return this.bookRepository.find();
  }
  async findByID(id): Promise<any> {
    return this.bookRepository.findOneOrFail(id);
  }
}
