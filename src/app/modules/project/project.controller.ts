import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { projectService } from "./project.service"


const addProjectController = catchAsync(async (req: Request, res: Response) => {

    const result = await projectService.addProject(req.body)
    sendResponse(res, {
        success: true,
        status: 200,
        message: 'Project Added successfully',
        data: result,
        statusCode: 200
    })
})

export const projectController = {
    addProjectController
}