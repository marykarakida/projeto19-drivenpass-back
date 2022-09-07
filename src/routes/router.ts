import { Router } from 'express';

import authRouter from './authRouter';
import credentialRouter from './credentialRouter';
import notesRouter from './notesRouter';

const router = Router();

router.use('/auth', authRouter);
router.use('/credentials', credentialRouter);
router.use('/notes', notesRouter);

export default router;
