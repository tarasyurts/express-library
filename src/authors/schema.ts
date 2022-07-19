import { Schema } from 'mongoose'
import { Book } from '../books/schema'

export interface Author {
    _id?: string
    name: string
    age: number
    books: Book[] | string[]
}

const authorSchema = new Schema<Author>({
    name: String,
    age: Number,
    books: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
})

export default authorSchema