import { Router } from 'express'
import { authRoute } from '../modules/auth/auth.route';
import { userRoute } from '../modules/user/user.route';
import { blogRoute } from '../modules/post/post.route';
import { projectRoute } from '../modules/project/project.route';

const router = Router()

const moduleRoutes = [
    {
        path : '/auth',
        route : authRoute
    },
    {
        path : '/auth',
        route : userRoute
    },
    {
        path : '/blog',
        route : blogRoute
    },
    {
        path : '/project',
        route : projectRoute
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;