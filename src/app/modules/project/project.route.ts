import express from 'express'
import { projectController } from './project.controller'

const router = express.Router()

router.post('/', projectController.addProjectController)
router.get('/', projectController.getAllProjectController)
router.put('/:projectId',  projectController.getUpdatedProject)
router.delete('/:projectId',  projectController.deleteSingleProjec)


export const projectRoute = router