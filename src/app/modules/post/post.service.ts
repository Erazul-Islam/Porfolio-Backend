import config from "../../config";
import { User } from "../user/user.model";
import { TPost } from "./post.interface";
import { blogmodel } from "./post.model";
import jwt from 'jsonwebtoken'


const addPost = async (payload: TPost, token: string) => {

    const decoded = jwt.verify(token, config.jwtAccessSecret as string)

    if (typeof decoded === 'string' || !('email' in decoded)) {
        throw new Error('Invalid token structure');
    }

    const finduser = await User.findOne({ email: decoded.email })

    const userEmail = finduser?.email
    const userName = finduser?.name
    const userId = finduser?._id
    const userProfilePhoto = finduser?.profilePhoto

    payload.userEmail = userEmail as string
    payload.userName = userName as string
    payload.userId = userId as string
    payload.userProfile = userProfilePhoto as string


    const result = await blogmodel.create(payload)

    return result
}

export const blogService = {
    addPost
}