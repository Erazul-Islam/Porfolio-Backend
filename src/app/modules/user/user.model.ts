/* eslint-disable @typescript-eslint/no-this-alias */
import mongoose, { model, Schema } from "mongoose";
import { TUser, UserModel } from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../config";

const userSchema = new Schema<TUser, UserModel>(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['USER', 'ADMIN'],
        },
        email: {
            type: String,
            required: true
        },
        profilePhoto: {
            type: String,
            required: true,
            
        },
        needsPasswordChange: {
            type: Boolean,
            default: true,
        },
        passwordChangedAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
    },
);


userSchema.pre('save', async function (next) {
    const user = this; // doc

    if (!user.isModified('password')) {
        return next();
    }
    user.password = await bcrypt.hash(
        user.password,
        Number(config.bcrypt_salt_rounds),
    );

    next();
});


userSchema.statics.isUSerExistByCustomEmial = async function (email: string) {
    return await User.findOne({ email }).select('+password')
}

userSchema.statics.isPasswordMatched = async function (plainTextPass: string, hashedPass: string) {
    return await bcrypt.compare(plainTextPass, hashedPass)
}

export const User = model<TUser, UserModel>('portfolio_user', userSchema);