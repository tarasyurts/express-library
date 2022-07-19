import AuthorDao from './dao'
import { Author } from './schema'

class AuthorService {

    async create(author: Author): Promise<Author> {
        return AuthorDao.create(author)
    }

    async getAll(): Promise<Author[]> {
        return AuthorDao.find()
    }

    async getOne(id: string): Promise<Author | null> {
        return AuthorDao.findById(id).populate('books')
    }

    async update(author: Author) {
        return AuthorDao.findByIdAndUpdate(author._id, author, { new: true })
    }

    async delete(id: string) {
        return AuthorDao.findByIdAndDelete(id)
    }
}

export default new AuthorService()