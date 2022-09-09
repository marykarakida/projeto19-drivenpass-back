import { Router } from 'express';

import * as wifiController from '../controllers/wifiController';
import validateToken from '../middlewares/validateTokenMiddleware';
import validateSchema from '../middlewares/validateSchemaMiddleware';

const router = Router();

router
    .route('/')
    .get(validateToken, wifiController.getAllWifis)
    .post(validateToken, validateSchema('newWifiSchema'), wifiController.createWifi);

router.route('/:id').get(validateToken, wifiController.getWifiById).delete(validateToken, wifiController.deleteWifi);

export default router;
