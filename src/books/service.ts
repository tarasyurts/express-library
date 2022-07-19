import { Book } from './schema'
import BookDao from './dao'
import AuthorDao from '../authors/dao'

class BookService {
    async create(book: Book): Promise<Book> {
        const createdBook = await BookDao.create(book)
        await AuthorDao.updateOne(
            { _id: book.author },
            { $push: { books: createdBook._id } }
        )
        return createdBook
    }

    async getAll(): Promise<Book[]> {
        return BookDao.find()
    }

    async getOne(id: string): Promise<Book | null> {
        return BookDao.findById(id).populate('author')
    }

    async update(newBook: Book) {
        const oldBook = await BookDao.findById(newBook._id)

        if (!oldBook) // Throw NOT FOUND or smth
            return Promise.resolve(undefined)

        if (newBook.author !== oldBook.author) {
            if (oldBook.author)
                await AuthorDao.updateOne(
                    { _id: oldBook.author },
                    { '$pull': { books: newBook._id } }
                )

            if (newBook.author)
                await AuthorDao.updateOne(
                    { _id: newBook.author },
                    { '$push': { books: newBook._id } }
                )
        }

        return BookDao.findByIdAndUpdate(newBook?._id, newBook, { new: true })
    }

    async delete(id: string): Promise<undefined> {
        const bookToDelete = await BookDao.findById(id)

        console.log('bookToDelete', bookToDelete)
        
        if (!bookToDelete) // Throw NOT FOUND or smth
            return Promise.resolve(undefined)

        await AuthorDao.updateOne(
            { _id: bookToDelete.author },
            { $pull: { books: id } }
        )

        BookDao.findByIdAndDelete(id)
    }
}


export default new BookService()