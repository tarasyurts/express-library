import express from 'express'
import AuthorController from './controller'
import AuthorMiddleware from './middleware'
import CommonMiddleware from '../common/middleware'

const router = express.Router()

router.route('/')
    .get(AuthorController.getAll)
    .post(
        AuthorMiddleware.validateCreateAuthorBody,
        AuthorController.create,
    )
    .put(
        CommonMiddleware.validateBodyId,
        AuthorMiddleware.validateEditAuthorBody,
        AuthorController.update,
    )

router.route('/:id')
    .get(AuthorController.getOne)
    .delete(AuthorController.delete)

export default router