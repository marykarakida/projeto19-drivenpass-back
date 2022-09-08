import { Router } from 'express';

import * as notesController from '../controllers/notesController';
import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from '../middlewares/validateSchemaMiddleware';

const router = Router();

router
    .route('/')
    .get(validateToken, notesController.getAllNotes)
    .post(validateToken, validateSchema('newNoteSchema'), notesController.createNote);

router.route('/:id').get(validateToken, notesController.getNoteById).delete(validateToken, notesController.deleteNote);

export default router;
