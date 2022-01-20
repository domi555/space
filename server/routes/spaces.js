const express = require('express');
const { getSpaces, addSpace, changeSpace, deleteSpace } = require('../controllers/spaces');

const router = express.Router();

router.get('/:id', getSpaces);
router.post('/', addSpace);
router.patch('/:id', changeSpace);
router.delete('/:id', deleteSpace);

module.exports = router;
