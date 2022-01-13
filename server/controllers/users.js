const asyncHandler = require('express-async-handler');
const model = require('../model/users.js');

const getUsers = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (req.query.id) {
    const rows = await model.getUserByID(req.query);
    if (rows.length === 0) {
      res.status(404).send(`User mit der ID ${id} nicht gefunden`);
    } else res.status(200).json(rows);
  }
});

module.exports = {
  getUsers,
};
