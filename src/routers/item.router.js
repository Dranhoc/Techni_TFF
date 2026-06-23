import { Router } from 'express';
import itemController from '../controllers/item.controller.js';
import { bodyValidator } from '../middlewares/validator.middleware.js';
import { connected } from '../middlewares/auth.middleware.js';
import { createItemValidator, updateItemValidator } from '../validators/item.validator.js';

const itemRouter = Router();

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Get all items
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: List of items
 */
itemRouter.get('/', itemController.getAll);

/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Get item by id
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item found
 *       404:
 *         description: Item not found
 */
itemRouter.get('/:id', itemController.getById);

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Create an item (requires auth)
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *                 example: My item
 *               description:
 *                 type: string
 *                 example: Item description
 *     responses:
 *       201:
 *         description: Item created
 *       401:
 *         description: Unauthorized
 */
itemRouter.post('/', connected(false), bodyValidator(createItemValidator), itemController.create);

/**
 * @swagger
 * /items/{id}:
 *   put:
 *     summary: Update an item (requires auth)
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Item updated
 *       404:
 *         description: Item not found
 */
itemRouter.put('/:id', connected(false), bodyValidator(updateItemValidator), itemController.update);

/**
 * @swagger
 * /items/{id}:
 *   delete:
 *     summary: Delete an item (requires auth)
 *     tags: [Items]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Item deleted
 *       404:
 *         description: Item not found
 */
itemRouter.delete('/:id', connected(false), itemController.delete);

export default itemRouter;
