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

const getAllProjectController = async (req: Request, res: Response) => {

    try {
        const result = await projectService.getAllProject()
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "project retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

const getUpdatedProject = async (req: Request, res: Response) => {
    const blogId = req.params.projectId
    const updatedData = req.body

    try {
        const updatedBike = await projectService.getUpdatedProjectFromDB(blogId, updatedData)

        res.status(200).json({
            success: true,
            message: "Project updated successfully!",
            data: updatedBike
        })
    } catch (err) {
        console.log(err)
    }
}

const deleteSingleProjec = async (req: Request, res: Response) => {

    try {

        const projectId = req.params.projectId;

        const result = await projectService.deletedFromDB(projectId)
        res.status(200).json({
            success: true,
            message: "blog deleted successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

}

export const projectController = {
    addProjectController,
    getAllProjectController,
    getUpdatedProject,
    deleteSingleProjec
}