import { Router } from 'express';

import authRouter from './authRouter';
import credentialRouter from './credentialRouter';
import notesRouter from './notesRouter';
import cardRouter from './cardRouter';
import wifiRouter from './wifiRouter';

const router = Router();

router.use('/auth', authRouter);
router.use('/credentials', credentialRouter);
router.use('/notes', notesRouter);
router.use('/cards', cardRouter);
router.use('/wifis', wifiRouter);

export default router;
