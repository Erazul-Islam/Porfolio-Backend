"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../middleware/validateRequest"));
const post_validation_1 = require("./post.validation");
const post_controller_1 = require("./post.controller");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(post_validation_1.postValidation.postValidationSchema), post_controller_1.postController.addPostController);
router.get('/', post_controller_1.postController.getAllblogs);
router.put('/:blogId', post_controller_1.postController.getUpdatedBlog);
router.delete('/:blogId', post_controller_1.postController.deleteSingleBlog);
exports.blogRoute = router;
