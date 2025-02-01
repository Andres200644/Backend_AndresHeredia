
import { Router } from 'express';
import CartController from '../controllers/cart.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = Router();

// Obtener carrito del usuario
router.get('/', authMiddleware, CartController.getCart);

// Agregar un producto al carrito
router.post('/add', authMiddleware, CartController.addToCart);

// Eliminar un producto del carrito
router.delete('/remove/:productId', authMiddleware, CartController.removeFromCart);

// Vaciar carrito
router.delete('/clear', authMiddleware, CartController.clearCart);

export default router;
