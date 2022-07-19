import { Request, Response, NextFunction } from 'express'

class CommonMiddleware {
    validateBodyId(
        req: Request,
        res: Response,
        next: NextFunction
    ) {
        if (req.body && req.body._id) {
            next()
        } else {
            res.status(400).json(
                {
                    errors: ['Missing identification']
                }
            )
        }
    }
}

export default new CommonMiddleware()
