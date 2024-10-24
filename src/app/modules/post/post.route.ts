import express from 'express'
import validateRequest from '../middleware/validateRequest'
import { postValidation } from './post.validation'
import { postController } from './post.controller'

const router = express.Router()

router.post('/', validateRequest(postValidation.postValidationSchema), postController.addPostController)
router.get('/', postController.getAllblogs)
router.put('/:blogId',  postController.getUpdatedBlog)
router.delete('/:blogId',  postController.deleteSingleBlog)

export const blogRoute = router