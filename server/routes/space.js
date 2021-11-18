const express = require('express');
const { xyz } = require('../controllers/space');

const router = express.Router();

router.get('/', xyz);

module.exports = router;
