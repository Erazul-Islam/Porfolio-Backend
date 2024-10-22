import httpStatus from "http-status"
import config from "../../config"
import { User } from "../user/user.model"
import { TLoginUser } from "./auth.interface"
import { createToken } from "./auth.utils"
import AppError from "../../error/AppError"
const loginUser = async (payload: TLoginUser) => {

    const user = await User.isUSerExistByCustomEmial(payload.email)
    console.log(user)

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found')
    }

    if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
        throw new AppError(httpStatus.FORBIDDEN, 'Invalid Password')
    }

    const jwtPayload = {
        _id: user._id,
        email: user.email,
        role: user.role,
        name: user.name,
        mobileNumber: user.mobileNumber,
        profilePhoto: user.profilePhoto,
    }

    const accessToken = createToken(jwtPayload, config.jwtAccessSecret as string, config.JWT_ACCESS_EXPIRES_IN as string)
    return {
        accessToken,
        user
    }
}

export const authService = {
    loginUser
}