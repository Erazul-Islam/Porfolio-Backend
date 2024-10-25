"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import httpStatus from 'http-status';
const notFound = (req, res) => {
    return res.status(400).json({
        success: false,
        message: 'Cannot found this route',
    });
};
exports.default = notFound;
