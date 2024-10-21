

import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { userService } from "./user.service";
import config from "../../config";
import jwt, { JwtPayload } from 'jsonwebtoken'
import sendResponse from "../../utils/sendResponse";

const signUpRegistration = catchAsync(async (req: Request, res: Response) => {
    const result = await userService.signUp(req.body)
    sendResponse(res, {
        statusCode: 201,
        status: 201,
        success: true,
        message: 'User Registration Successfully',
        data: result
    })
})

const getProfile = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization?.split(' ')[1]
        const result = await userService.getMyProfile(token as string)

        res.status(200).json({
            success: true,
            message: "User profile retrived successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

};

const deleteSingleUser = async (req: Request, res: Response) => {

    try {

        const userId = req.params.userId;

        const result = await userService.deleteUser(userId)
        res.status(200).json({
            success: true,
            message: "User deleted successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

}

const getAllProfile = async (req: Request, res: Response) => {


    try {
        const result = await userService.getAllProfileFromDB()
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "All profile retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}


export const userController = {
    signUpRegistration,
    getProfile,
    deleteSingleUser,
    getAllProfile
}