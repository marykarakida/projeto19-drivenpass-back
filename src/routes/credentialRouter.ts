import { Router } from 'express';

import * as credentialController from '../controllers/credentialController';
import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from '../middlewares/validateSchemaMiddleware';

import newCredentialSchema from '../schemas/credentials';

const router = Router();

router.route('/').post(validateToken, validateSchema(newCredentialSchema), credentialController.createCredential);

export default router;
