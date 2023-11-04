/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book } from './schemas/book.schema';

@Injectable()
export class BookService {
 constructor(
    @InjectModel(Book.name)
    private readonly bookModel: mongoose.Model<Book>
 ){}

 async findAll(): Promise<Book[]>{
   return new Promise(async (resolve, reject) => {
      try {
          const books = await this.bookModel.find({});
          if(!books) throw new Error("Error on finds all books");
          resolve(books);
      } catch (error) {
         reject(error)
      }
   })
 };

 async create(body: Book): Promise<Book>{
      return new Promise(async (resolve, reject) => {
         try {
            const book = await this.bookModel.create(body);
            if(!book) throw new Error("Error on new create");
            resolve(book);
            
         } catch (error) {
            console.log(reject);
         }
      })
 }



}
