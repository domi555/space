/* eslint-disable operator-linebreak */
const asyncHandler = require('express-async-handler');
const model = require('../model/spaces.js');

const getSpaces = asyncHandler(async (req, res) => {
  const rows = await model.getSpaceByID(req.params.id);
  res.status(200).json(rows);
});

const addSpace = asyncHandler(async (req, res) => {
  const { name, description, image, userid, spaceid, admin } = req.body;
  if (name == null || description == null || image == null || userid == null || spaceid == null || admin == null) {
    res.status(404).send('Fehler bei den Properties: name, description, image, userid, spaceid, admin');
  } else {
    await model.addSpace(req.body);
    await model.addUserToSpace(req.body);
    res.status(200).send('Erfolgreich hinzugefügt');
  }
});

const changeSpace = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const rows = await model.getSpace({ id });
  if (rows.length > 0) {
    try {
      await model.changeSpace(id, req.body);
    } catch (error) {
      res.status(200).send('Fehlgeschlagen');
    }
    res.status(200).send('Erfolgreich geupdated');
  } else {
    res.status(404).send(`Der Space mit der ID ${id} wurde nicht gefunden`);
  }
});

const deleteSpace = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const rows = await model.getSpace({ id });
  if (rows.length > 0) {
    model.deleteSpace(id);
    res.status(200).send(`Der Space mit der ID ${id} wurde erfolgreich gelöscht`);
  } else {
    res.status(404).send(`Der folgende Space mit der ID ${id} wurde nicht gefunden`);
  }
});

module.exports = {
  getSpaces,
  addSpace,
  changeSpace,
  deleteSpace,
};
