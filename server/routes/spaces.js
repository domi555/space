const express = require('express');
const { getSpaces } = require('../controllers/spaces');

const router = express.Router();

router.get('/', getSpaces);

module.exports = router;
