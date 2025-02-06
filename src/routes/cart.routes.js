import express from 'express';
import CartController from '../controllers/cart.controller.js';

const router = express.Router();

router.get('/:id', CartController.getCart);
router.post('/:id', CartController.addToCart);
router.delete('/:id', CartController.removeFromCart);

export default router;
