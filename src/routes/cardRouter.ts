import { Router } from 'express';

import * as cardController from '../controllers/cardController';
import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from '../middlewares/validateSchemaMiddleware';

import newCardSchema from '../schemas/cards';

const router = Router();

router
    .route('/')
    .get(validateToken, cardController.getAllCards)
    .post(validateToken, validateSchema(newCardSchema), cardController.createCard);

router.route('/:id').get(validateToken, cardController.getCardById).delete(validateToken, cardController.deleteCard);

export default router;
