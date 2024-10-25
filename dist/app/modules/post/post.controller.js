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
exports.postController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const post_service_1 = require("./post.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const addPostController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    const result = yield post_service_1.blogService.addPost(req.body, token);
    console.log(result);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: 'Post Added successfully',
        data: result,
        statusCode: 200
    });
}));
const getAllblogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield post_service_1.blogService.getAllBlogs();
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Blogs retrieved successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getUpdatedBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogId = req.params.blogId;
    const updatedData = req.body;
    try {
        const updatedBike = yield post_service_1.blogService.getUpdatedBlogFromDB(blogId, updatedData);
        res.status(200).json({
            success: true,
            message: "Blog updated successfully!",
            data: updatedBike
        });
    }
    catch (err) {
        console.log(err);
    }
});
const deleteSingleBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogId = req.params.blogId;
        const result = yield post_service_1.blogService.deletedFromDB(blogId);
        res.status(200).json({
            success: true,
            message: "blog deleted successfully!",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.postController = {
    addPostController,
    getAllblogs,
    getUpdatedBlog,
    deleteSingleBlog
};
