

import jwt from 'jsonwebtoken'
import { TUser } from './user.interface';
import { User } from './user.model';
import config from '../../config';


const signUp = async (payload: TUser) => {
    const result = await User.create(payload)
    return result
}
const getMyProfile = async (token: string) => {
    try {

        const decoded = jwt.verify(token, config.jwtAccessSecret as string)

        if (typeof decoded === 'string' || !('email' in decoded)) {
            throw new Error('Invalid token structure');
        }

        const userEmail = decoded.email

        const user = await User.findOne({ email: userEmail });

        if (!user) {
            throw new Error('User not found');
        }

        return user;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        throw new Error('Invalid token');
    }
};

const getUpdatedUserRole = async (id: string) => {
    try {
        const user = await User.findById(id)

        if(!user){
            return {message:'User not Found'}
        }

        if(user.role === "ADMIN"){
            throw new Error ("Cannot change role of an admin")
        }

        const updatedUser = await User.findByIdAndUpdate({_id:id}, {role : "ADMIN"}, {new : true})

        return updatedUser
    }
    catch (err) {
        console.log(err)
    }
}


const deleteUser = async (id:string) => {
    const result = await User.deleteOne({_id : id})

    return result
}

const getAllProfileFromDB = async () => {
    const result = await User.find()
    return result
}

export const userService = {
    signUp,
    getMyProfile,
    getUpdatedUserRole,
    deleteUser,
    getAllProfileFromDB
}