import express from 'express';
import { getCart, addItemToCart, removeItemFromCart } from '../controllers/cart.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/', authMiddleware, getCart);
router.post('/add', authMiddleware, addItemToCart);
router.delete('/remove/:itemId', authMiddleware, removeItemFromCart);

export default router;
