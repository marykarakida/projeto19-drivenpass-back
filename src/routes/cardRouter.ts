import { Router } from 'express';

import * as cardController from '../controllers/cardController';
import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from '../middlewares/validateSchemaMiddleware';

import newCardSchema from '../schemas/cards';

const router = Router();

router.route('/').post(validateToken, validateSchema(newCardSchema), cardController.createCard);

export default router;
