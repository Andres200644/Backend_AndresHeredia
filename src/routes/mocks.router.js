const express = require("express");
const { generateMockData } = require("../controllers/mocking.controller");

const router = express.Router();

router.get("/", generateMockData);

module.exports = router;
