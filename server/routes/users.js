const express = require('express');
const { getUsers, addUser, changeUser, deleteUser } = require('../controllers/users');

const router = express.Router();

router.get('/:id', getUsers);
router.post('/', addUser);
router.patch('/:id/password', changeUser);
router.patch('/:id', changeUser);
router.delete('/:email', deleteUser);

module.exports = router;
