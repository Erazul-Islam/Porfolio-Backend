import { model, Schema } from "mongoose";
import { TPost } from "./post.interface";
const postSchema = new Schema<TPost>(
    {
        userEmail: {
            type: String,
            required: true
        },
        caption: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        },
        photo : {
            type : String,
            required : true
        },
        userId: {
            type: String,
            required: true
        },
        userProfile: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
)

export const blogmodel = model<TPost>('blog', postSchema)