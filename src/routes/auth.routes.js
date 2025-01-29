import { Router } from 'express';
import AuthController from '../controllers/auth.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = Router();

// Ruta para registrar usuario
router.post('/register', AuthController.register);

// Ruta para login
router.post('/login', AuthController.login);

// Ruta para obtener perfil del usuario autenticado
router.get('/profile', authMiddleware, AuthController.getProfile);

export default router;
