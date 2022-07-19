import { Schema } from 'mongoose'
import { Author } from '../authors/schema'

export interface Book {
    _id?: string
    title: string
    description: string
    author: Author | string
}

const bookSchema = new Schema<Book>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'Author' }
})

export default bookSchema