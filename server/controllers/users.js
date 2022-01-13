/* eslint-disable operator-linebreak */
// eslint-disable-next-line spaced-comment
/*eslint max-len: ["error", { "code": 250 }] */

const asyncHandler = require('express-async-handler');
const model = require('../model/users.js');

const getUsers = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const rows = await model.getUserByID(req.params.id);
  if (rows.length === 0) {
    res.status(404).send(`User mit der ID ${id} nicht gefunden`);
  } else res.status(200).json(rows);
});

const addUser = asyncHandler(async (req, res) => {
  const { email, first, last, password } = req.body;
  if (email == null || first == null || last == null || password == null) {
    res.status(404).send('One or more properties missing: email, first, last, password');
  } else {
    try {
      await model.addUser(req.body);
      res.status(200).send('Erfolgreich');
    } catch (error) {
      res.status(404).send('Fehlgeschlagen');
    }
  }
});

module.exports = {
  getUsers,
  addUser,
};
