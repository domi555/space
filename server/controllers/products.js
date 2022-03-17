/* eslint-disable operator-linebreak */
// eslint-disable-next-line spaced-comment
/*eslint max-len: ["error", { "code": 250 }] */
const asyncHandler = require('express-async-handler');
const model = require('../model/products.js');

const getProductByUserID = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const rows = await model.getProductByUserID(req.params.id);
  if (rows.length === 0) {
    res.status(404).send(`Product mit der User ID ${id} nicht gefunden`);
  } else res.status(200).json(rows);
});

const getProductByID = asyncHandler(async (req, res) => {
  const rows = await model.getProduct(req.params.id);
  if (rows.length === 0) {
    res.status(404).send(`Product mit der ID ${req.params.id} nicht gefunden`);
  } else res.status(200).json(rows[0]);
});

const addProduct = asyncHandler(async (req, res) => {
  const { name, description, image, count, spaceid } = req.body;
  if (name == null || description == null || image == null || count == null || spaceid == null) {
    res.status(404).send('Fehler bei den Properties: name, description, image, count, space_id, barcode');
  } else {
    try {
      const result = await model.addProduct(req.body);
      res.status(200).json({ code: 200, data: result });
    } catch (err) {
      res.status(500).send({ code: 500, data: err });
    }
  }
});

const changeProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const rows = await model.getProduct(id);
  if (rows.length > 0) {
    try {
      await model.changeProduct(id, req.body);
    } catch (error) {
      res.status(200).send('Fehlgeschlagen');
    }
    res.status(200).send('Erfolgreich geupdated');
  } else {
    res.status(404).send(`Das Product mit der ID ${id} wurde nicht gefunden`);
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const rows = await model.getProduct(id);
  if (rows.length > 0) {
    model.deleteProduct(id);
    res.status(200).send(`Das Product mit der ID ${id} wurde erfolgreich gelöscht`);
  } else {
    res.status(404).send(`Das Product mit der ID ${id} wurde nicht gefunden`);
  }
});

module.exports = {
  getProductByUserID,
  addProduct,
  changeProduct,
  deleteProduct,
  getProductByID,
};
