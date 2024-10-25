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
exports.projectController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const project_service_1 = require("./project.service");
const addProjectController = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_service_1.projectService.addProject(req.body);
    (0, sendResponse_1.default)(res, {
        success: true,
        status: 200,
        message: 'Project Added successfully',
        data: result,
        statusCode: 200
    });
}));
const getAllProjectController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield project_service_1.projectService.getAllProject();
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "project retrieved successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getUpdatedProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const blogId = req.params.projectId;
    const updatedData = req.body;
    try {
        const updatedBike = yield project_service_1.projectService.getUpdatedProjectFromDB(blogId, updatedData);
        res.status(200).json({
            success: true,
            message: "Project updated successfully!",
            data: updatedBike
        });
    }
    catch (err) {
        console.log(err);
    }
});
const deleteSingleProjec = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectId = req.params.projectId;
        const result = yield project_service_1.projectService.deletedFromDB(projectId);
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
exports.projectController = {
    addProjectController,
    getAllProjectController,
    getUpdatedProject,
    deleteSingleProjec
};
