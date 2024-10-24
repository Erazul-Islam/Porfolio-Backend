import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { blogService } from "./post.service";
import sendResponse from "../../utils/sendResponse";

const addPostController = catchAsync(async (req: Request, res: Response) => {

    const token = req.headers.authorization?.split(' ')[1];

    const result = await blogService.addPost(req.body, token as string)

    console.log(result)

    sendResponse(res, {
        success: true,
        status: 200,
        message: 'Post Added successfully',
        data: result,
        statusCode: 200
    })
})

const getAllblogs = async (req: Request, res: Response) => {

    try {
        const result = await blogService.getAllBlogs()
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Blogs retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

const getUpdatedBlog = async (req: Request, res: Response) => {
    const blogId = req.params.blogId
    const updatedData = req.body

    try {
        const updatedBike = await blogService.getUpdatedBlogFromDB(blogId, updatedData)

        res.status(200).json({
            success: true,
            message: "Blog updated successfully!",
            data: updatedBike
        })
    } catch (err) {
        console.log(err)
    }
}

const deleteSingleBlog = async (req: Request, res: Response) => {

    try {

        const blogId = req.params.blogId;

        const result = await blogService.deletedFromDB(blogId)
        res.status(200).json({
            success: true,
            message: "blog deleted successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

}

export const postController = {
    addPostController,
    getAllblogs,
    getUpdatedBlog,
    deleteSingleBlog
}