import { Router } from 'express';

import authRouter from './authRouter';
import credentialRouter from './credentialRouter';

const router = Router();

router.use('/auth', authRouter);
router.use('/credentials', credentialRouter);

export default router;
