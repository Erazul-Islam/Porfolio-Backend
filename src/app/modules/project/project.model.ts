import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";
const postSchema = new Schema<TProject>(
    {
        details : {
            type : String,
            required : true
        },
        link : {
            type : String,
            required : true
        }
        
    },
    {
        timestamps: true
    }
)

export const projectModel = model<TProject>('Project', postSchema)