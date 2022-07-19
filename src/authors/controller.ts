import { Request, Response } from 'express'
import AuthorService from './service'

class AuthorController {
    async create(req: Request, res: Response) {
        const author = await AuthorService.create(req.body)
        res.json(author)
    }

    async getAll(req: Request, res: Response) {
        const authors = await AuthorService.getAll()
        res.json(authors)
    }

    async getOne(req: Request, res: Response) {
        const author = await AuthorService.getOne(req.params.id)
        res.json(author)
    }

    async update(req: Request, res: Response) {
        const updatedAuthor = await AuthorService.update(req.body)
        res.json(updatedAuthor)
    }

    async delete(req: Request, res: Response) {
        await AuthorService.delete(req.params.id)
        res.json()
    }
}

export default new AuthorController()