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
    res.status(404).send('Fehler bei den Properties: email, first, last, password');
  } else {
    const result = await model.addUser(req.body);
    res.status(200).send(result);
  }
});

const changeUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const rows = await model.getUser({ id });
  if (rows.length > 0) {
    try {
      await model.changeUser(id, req.body);
    } catch (error) {
      res.status(200).send('Fehlgeschlagen');
    }
    res.status(200).send('Erfolgreich geupdated');
  } else {
    res.status(404).send(`Der User mit der ID ${id} wurde nicht gefunden`);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const { email } = req.params;
  const rows = await model.getUserByEmail({ email });
  if (rows.length > 0) {
    model.deleteUser(email);
    res.status(200).send(`Der User mit der E-Mail ${email} wurde erfolgreich gelöscht`);
  } else {
    res.status(404).send(`Der folgende User mit der E-Mail ${email} wurde nicht gefunden`);
  }
});

module.exports = {
  getUsers,
  addUser,
  changeUser,
  deleteUser,
};
