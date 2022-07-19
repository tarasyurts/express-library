import { NextFunction, Request, Response } from 'express'

class AuthorMiddleware {
    validateCreateAuthorBody(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        if (req.body && req.body.name && req.body.age) {
            next()
        } else {
            res.status(400).json(
                {
                    errors: ['Missing required fields']
                }
            )
        }
    }

    validateEditAuthorBody(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        if (req.body && !req.body.books) {
            next()
        } else {
            res.status(400).json(
                {
                    errors: ['Books are not allowed to be updated by authors entity']
                }
            )
        }
    }
}

export default new AuthorMiddleware()