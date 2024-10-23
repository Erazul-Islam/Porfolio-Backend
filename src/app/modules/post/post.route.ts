import express from 'express'
import validateRequest from '../middleware/validateRequest'
import { postValidation } from './post.validation'
import { postController } from './post.controller'

const router = express.Router()

router.post('/', validateRequest(postValidation.postValidationSchema), postController.addPostController)

export const blogRoute = router