import { Request, Response, NextFunction } from 'express'

class BookMiddleware {
    validateCreateBookBody(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        if (req.body && req.body.title && req.body.description) {
            next()
        } else {
            res.status(400).json(
                {
                    errors: ['Missing required fields']
                }
            )
        }
    }
}

export default new BookMiddleware()
