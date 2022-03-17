const express = require('express');
const { getProductByUserID, getProductByID, addProduct, changeProduct, deleteProduct, getProductByBarcode } = require('../controllers/products');

const router = express.Router();

router.get('/:id', getProductByUserID);
router.get('/item/:id', getProductByID);
router.post('/', addProduct);
router.patch('/:id', changeProduct);
router.delete('/:id', deleteProduct);
router.get('/:barcode/code', getProductByBarcode);

module.exports = router;
