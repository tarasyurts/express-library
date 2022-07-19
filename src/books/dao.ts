import { model } from 'mongoose'
import bookSchema, { Book } from './schema'

export default model<Book>('Book', bookSchema)
