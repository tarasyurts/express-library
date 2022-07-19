import { Request, Response } from 'express'
import BookService from './service'

class BookController {
    async create(req: Request, res: Response) {
        const book = await BookService.create(req.body)
        res.json(book)
    }

    async getAll(_req: Request, res: Response) {
        const books = await BookService.getAll()
        res.json(books)
    }

    async getOne(req: Request, res: Response) {
        const book = await BookService.getOne(req.params.id)
        res.json(book)
    }

    async update(req: Request, res: Response) {
        const updatedBook = await BookService.update(req.body)
        res.json(updatedBook)
    }

    async delete(req: Request, res: Response) {
        await BookService.delete(req.params.id)
        res.json()
    }
}

export default new BookController()