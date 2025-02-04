import express from 'express';
import {
  generateMockUsers,
  generateMockPets,
  generateAndSaveData,
} from '../controllers/mocking.controller.js';

const router = express.Router();

router.get('/mock-users', generateMockUsers);
router.get('/mock-pets', generateMockPets);
router.post('/generate-data', generateAndSaveData);

export default router;
