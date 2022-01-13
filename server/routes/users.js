const express = require('express');
const { getUsers, addUser } = require('../controllers/users');

const router = express.Router();

router.get('/:id', getUsers);
router.post('/', addUser);

module.exports = router;
