const asyncHandler = require('express-async-handler');
const model = require('../model/products.js');

const getProductByUserID = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const rows = await model.getProductByUserID(req.params.id);
  if (rows.length === 0) {
    res.status(404).send(`Product mit der User ID ${id} nicht gefunden`);
  } else res.status(200).json(rows);
});

module.exports = {
  getProductByUserID,
};
