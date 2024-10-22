import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface TUser {
    _id: string,
    name: string,
    email: string,
    password: string,
    mobileNumber: string,
    profilePhoto: string,
    needsPasswordChange: boolean;
    passwordChangedAt?: Date;
    createdAt: Date,
    updatedAt: Date,
    role: 'ADMIN' | 'USER',
};

export interface UserModel extends Model<TUser> {
    isUserExistsByCustomId(id: string): Promise<TUser>
    isUSerExistByCustomEmial(email: string): Promise<TUser>
    isPasswordMatched(plainTextPass: string, hashedPass: string): Promise<boolean>
}



export type TUserRole = keyof typeof USER_ROLE