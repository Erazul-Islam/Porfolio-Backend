import express from 'express'
import { projectController } from './project.controller'

const router = express.Router()

router.post('/', projectController.addProjectController)


export const projectRoute = router