import { Resolver, Query, Mutation, Args, ResolveField } from '@nestjs/graphql';
import { Books } from './books.entity';
import { BooksService } from './books.service';
import { AddBookInput } from './dto/book.input';

@Resolver((of) => Books)
export class BooksResolver {
  constructor(private bookService: BooksService) {}

  @Query((returns) => [Books])
  async books(): Promise<Books[]> {
    const result = await this.bookService.findAll();
    return result;
  }

  @ResolveField((returns) => [Books])
  async findById(@Args('id') id: number): Promise<Books> {
    return await this.bookService.findByID(id);
  }

  @Mutation((returns) => Books)
  addBooks(@Args('addBookInput') addBookInput: AddBookInput): Promise<any> {
    return this.bookService.addBooks(addBookInput);
  }
}
