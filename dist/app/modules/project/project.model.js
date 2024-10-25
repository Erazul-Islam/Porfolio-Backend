"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectModel = void 0;
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    details: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    backend: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
exports.projectModel = (0, mongoose_1.model)('Project', postSchema);
