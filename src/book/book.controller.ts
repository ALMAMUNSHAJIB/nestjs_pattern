/* eslint-disable prettier/prettier */
import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  async cretaeBookService(@Body() body){
      try {
        const data = await this.bookService.create(body);
        return { statusCode: 1, message: "New Service Created", data }
      } catch (error) {
      return { statusCode: HttpStatus.BAD_REQUEST, message: error.message };
      }
  }
}
