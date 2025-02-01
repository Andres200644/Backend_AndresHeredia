import { Router } from 'express';
import MockingController from '../controllers/mocking.controller.js';

const router = Router();

// Generar 50 usuarios de prueba
router.get('/mockingusers', MockingController.generateMockUsers);

// Generar datos de prueba dinámicamente
router.post('/generateData', MockingController.generateMockData);

export default router;