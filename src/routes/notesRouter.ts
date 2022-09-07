import { Router } from 'express';

import * as notesController from '../controllers/notesController';
import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from '../middlewares/validateSchemaMiddleware';

import newNoteSchema from '../schemas/notes';

const router = Router();

router.route('/').post(validateToken, validateSchema(newNoteSchema), notesController.createNote);

export default router;
