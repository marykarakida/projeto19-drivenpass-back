import { Router } from 'express';

import * as credentialController from '../controllers/credentialController';
import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from '../middlewares/validateSchemaMiddleware';

import newCredentialSchema from '../schemas/credentials';

const router = Router();

router
    .route('/')
    .get(validateToken, credentialController.getAllCredentials)
    .post(validateToken, validateSchema(newCredentialSchema), credentialController.createCredential);

router
    .route('/:id')
    .get(validateToken, credentialController.getCredentialById)
    .delete(validateToken, credentialController.deleteCredential);

export default router;
