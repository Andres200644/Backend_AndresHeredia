import express from 'express';
import { generateMockUsers, generateMockPets } from '../controllers/mocking.controller.js';

const router = express.Router();

router.get('/mockingusers', generateMockUsers);
router.get('/mockingpets', generateMockPets);

export default router;
