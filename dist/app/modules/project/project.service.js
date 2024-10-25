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
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectService = void 0;
const project_model_1 = require("./project.model");
const addProject = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = project_model_1.projectModel.create(payload);
    return result;
});
const getAllProject = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.projectModel.find();
    return result;
});
const getUpdatedProjectFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    try {
        const updatedProject = yield project_model_1.projectModel.findOneAndUpdate({ _id: id }, payload, { new: true });
        console.log(updatedProject);
        return updatedProject;
    }
    catch (error) {
        console.log(error);
    }
});
const deletedFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield project_model_1.projectModel.deleteOne({ _id: id });
    return result;
});
exports.projectService = {
    addProject,
    getAllProject,
    getUpdatedProjectFromDB,
    deletedFromDB
};
