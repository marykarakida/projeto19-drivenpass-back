import { Router } from 'express';

import * as notesController from '../controllers/notesController';
import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from '../middlewares/validateSchemaMiddleware';

import newNoteSchema from '../schemas/notes';

const router = Router();

router
    .route('/')
    .get(validateToken, notesController.getAllNotes)
    .post(validateToken, validateSchema(newNoteSchema), notesController.createNote);

router.route('/:id').get(validateToken, notesController.getNoteById);

export default router;
