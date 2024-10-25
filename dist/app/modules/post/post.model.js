"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogmodel = void 0;
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
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
    photo: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    userProfile: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});
exports.blogmodel = (0, mongoose_1.model)('blog', postSchema);
