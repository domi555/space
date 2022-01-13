const express = require('express');
const { getProductByUserID } = require('../controllers/products');

const router = express.Router();

router.get('/:id', getProductByUserID);

module.exports = router;
