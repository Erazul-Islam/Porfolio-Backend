"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const user_route_1 = require("../modules/user/user.route");
const post_route_1 = require("../modules/post/post.route");
const project_route_1 = require("../modules/project/project.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/auth',
        route: auth_route_1.authRoute
    },
    {
        path: '/auth',
        route: user_route_1.userRoute
    },
    {
        path: '/blog',
        route: post_route_1.blogRoute
    },
    {
        path: '/project',
        route: project_route_1.projectRoute
    }
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
