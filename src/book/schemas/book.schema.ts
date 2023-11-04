/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum Category {
    ADVANTURE = 'advanture',
    CLASSIC = 'classic',
    CRIME = 'cirme',
}


@Schema({
    timestamps: true
})

export class Book {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;



    @Prop()
    price: string;


    @Prop()
    category: Category;

} 


export const BookSchema = SchemaFactory.createForClass(Book);