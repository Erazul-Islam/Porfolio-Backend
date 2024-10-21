import express from 'express'
import validateRequest from '../middleware/validateRequest';
import { UserValidation } from './user.validation';
import { userController } from './user.controller';

const router = express.Router();

router.post(
    '/register',
    validateRequest(UserValidation.userValidationSchema),
    userController.signUpRegistration,
);

export const userRoute = router