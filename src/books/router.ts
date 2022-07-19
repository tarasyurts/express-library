import express from 'express'
import BookController from './controller'
import BookMiddleware from './middleware'
import CommonMiddleware from '../common/middleware'

const router = express.Router()

router.route('/')
    .get(BookController.getAll)
    .post(
        BookMiddleware.validateCreateBookBody,
        BookController.create,
    )
    .put(
        CommonMiddleware.validateBodyId,
        BookController.update
    )

router.route('/:id')
    .get(BookController.getOne)
    .delete(BookController.delete)

export default router