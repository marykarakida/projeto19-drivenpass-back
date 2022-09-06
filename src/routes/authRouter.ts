import { Router } from 'express';

import * as authController from '../controllers/authController';
import validateSchema from '../middlewares/validateSchemaMiddleware';

import { newUserSchema } from '../schemas/users';

const router = Router();

router.post('/register', validateSchema(newUserSchema), authController.register);

export default router;
