const express = require('express');
const { generateMockProducts } = require('../controllers/mocks.controller');

const router = express.Router();

router.get('/products', generateMockProducts);

module.exports = router;
