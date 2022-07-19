import { model } from 'mongoose'
import authorSchema, { Author } from './schema'

export default model<Author>('Author', authorSchema)