import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import { bodyValidator } from '../middlewares/validator.middleware.js';
import { registerValidator, loginValidator } from '../validators/auth.validator.js';

const authRouter = Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, pseudo, password]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               pseudo:
 *                 type: string
 *                 example: JohnDoe
 *               password:
 *                 type: string
 *                 example: Password123!
 *     responses:
 *       204:
 *         description: User created
 *       400:
 *         description: Validation error
 */
authRouter.post('/register', bodyValidator(registerValidator), authController.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login with email or pseudo
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [password]
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               pseudo:
 *                 type: string
 *                 example: JohnDoe
 *               password:
 *                 type: string
 *                 example: Password123!
 *     responses:
 *       200:
 *         description: Returns JWT token
 *       400:
 *         description: Invalid credentials
 */
authRouter.post('/login', bodyValidator(loginValidator), authController.login);

export default authRouter;
