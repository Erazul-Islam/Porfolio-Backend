"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogService = void 0;
const config_1 = __importDefault(require("../../config"));
const user_model_1 = require("../user/user.model");
const post_model_1 = require("./post.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const addPost = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwtAccessSecret);
    if (typeof decoded === 'string' || !('email' in decoded)) {
        throw new Error('Invalid token structure');
    }
    const finduser = yield user_model_1.User.findOne({ email: decoded.email });
    const userEmail = finduser === null || finduser === void 0 ? void 0 : finduser.email;
    const userName = finduser === null || finduser === void 0 ? void 0 : finduser.name;
    const userId = finduser === null || finduser === void 0 ? void 0 : finduser._id;
    const userProfilePhoto = finduser === null || finduser === void 0 ? void 0 : finduser.profilePhoto;
    payload.userEmail = userEmail;
    payload.userName = userName;
    payload.userId = userId;
    payload.userProfile = userProfilePhoto;
    const result = yield post_model_1.blogmodel.create(payload);
    return result;
});
const getAllBlogs = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_model_1.blogmodel.find();
    return result;
});
const getUpdatedBlogFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBlog = yield post_model_1.blogmodel.findOneAndUpdate({ _id: id }, payload, { new: true });
        return updatedBlog;
    }
    catch (error) {
        console.log(error);
    }
});
const deletedFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield post_model_1.blogmodel.deleteOne({ _id: id });
    return result;
});
exports.blogService = {
    addPost,
    getAllBlogs,
    getUpdatedBlogFromDB,
    deletedFromDB
};
