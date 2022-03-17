/* eslint-disable prefer-template */
/* eslint-disable guard-for-in */
const db = require('../db');

async function getProductByUserID(id) {
  const { rows } = await db.query(
    'select p.id, p.name, p.description, p.image, count from users join users_spaces us on users.id = us.user_id join spaces s on us.space_id = s.id join products p on s.id = p.space_id where s.id = $1 group by p.id, p.name, p.description, p.image, count;',
    [id],
  );
  return rows;
}

async function getProductByBarcode(barcode) {
  const { rows } = await db.query('select * from products where barcode = $1;', [barcode]);
  return rows;
}
const addProduct = async (body) => {
  const { rows } = await db.query(
    'INSERT INTO products(name, description, image, count, space_id, barcode) VALUES ($1,$2,$3,$4,$5,$6) returning *;',
    [body.name, body.description, body.image, body.count, body.spaceid, body.barcode],
  );
  return rows;
};

const changeProduct = async (id, object) => {
  const upd = [];
  for (const key in object) {
    upd.push(`${key} = '${object[key]}'`);
  }
  const cmd = 'UPDATE products SET ' + upd.join(', ') + ' WHERE id = $1';
  await db.query(cmd, [id]);
};

const getProduct = async (id) => {
  const { rows } = await db.query('SELECT * FROM products WHERE id = $1', [id]);
  return rows;
};

const deleteProduct = (id) => db.query('DELETE FROM products WHERE id = $1', [id]);

module.exports = {
  getProductByUserID,
  addProduct,
  changeProduct,
  getProduct,
  deleteProduct,
  getProductByBarcode,
};
