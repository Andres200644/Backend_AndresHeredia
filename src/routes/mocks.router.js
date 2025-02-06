import express from 'express';
import { generateMockUsers, generateMockPets, generateAndSaveData } from '../controllers/mocking.controller.js';

const router = express.Router();

router.get('/api/users/mockingusers', generateMockUsers);
router.get('/api/pets/mockingpets', generateMockPets);
router.post('/api/data/generate', generateAndSaveData);

export default router;
