import { Router } from 'express';
import { getAllProducts, getProductById, createProduct } from '../controllers/product.controller.js'; // Importar usando nombres consistentes

const router = Router();

router.get('/', getAllProducts);  // Obtener todos los productos
router.get('/:id', getProductById);  // Obtener un producto por su ID
router.post('/', createProduct);  // Crear un nuevo producto

export default router;
