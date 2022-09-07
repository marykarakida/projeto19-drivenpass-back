import { Router } from 'express';

import authRouter from './authRouter';
import credentialRouter from './credentialRouter';
import notesRouter from './notesRouter';
import cardRouter from './cardRouter';

const router = Router();

router.use('/auth', authRouter);
router.use('/credentials', credentialRouter);
router.use('/notes', notesRouter);
router.use('/cards', cardRouter);

export default router;
