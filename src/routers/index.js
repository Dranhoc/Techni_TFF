import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../config/swagger.config.js';

import authRouter from './auth.router.js';
import itemRouter from './item.router.js';

const router = Router();

router.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
router.use('/auth', authRouter);
router.use('/items', itemRouter);

export default router;
