import express from 'express';
import { getCartItems, addItemToCart, deleteCartItem, clearCart } from '../controllers/cart.controller.js';

const router = express.Router();

router.get('/', getCartItems);
router.post('/', addItemToCart);
router.delete('/:id', deleteCartItem);
router.delete('/', clearCart);

export default router;
