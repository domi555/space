const express = require('express');
const { getProductByUserID, addProduct, changeProduct, deleteProduct } = require('../controllers/products');

const router = express.Router();

router.get('/:id', getProductByUserID);
router.post('/', addProduct);
router.patch('/:id', changeProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
