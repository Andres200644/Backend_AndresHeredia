import { Router } from 'express';
import ProductController from '../controllers/product.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = Router();

// Obtener todos los productos
router.get('/', ProductController.getAllProducts);

// Obtener un producto por ID
router.get('/:id', ProductController.getProductById);

// Agregar un nuevo producto (solo admins)
router.post('/', authMiddleware, ProductController.createProduct);

// Actualizar producto (solo admins)
router.put('/:id', authMiddleware, ProductController.updateProduct);

// Eliminar producto (solo admins)
router.delete('/:id', authMiddleware, ProductController.deleteProduct);

export default router;