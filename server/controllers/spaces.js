const asyncHandler = require('express-async-handler');
const model = require('../model/spaces.js');

const getSpaces = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (req.query.id) {
    const rows = await model.getSpaceByID(req.query);
    if (rows.length === 0) {
      res.status(404).send(`Space mit der ID ${id} nicht gefunden`);
    } else res.status(200).json(rows);
  }
});

module.exports = {
  getSpaces,
};
