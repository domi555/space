const express = require('express');
const { getUsers } = require('../controllers/users');

const router = express.Router();

router.get('/:id', getUsers);

module.exports = router;
