const db = require('../db');

async function getProductByUserID(id) {
  const { rows } = await db.query(
    'SELECT products.name, products.description, products.image, count FROM users JOIN users_spaces on users.id = users_spaces.user_id JOIN spaces on users.id = spaces.id JOIN products on spaces.id = products.space_id WHERE users.id = $1;',
    [id],
  );
  return rows;
}

module.exports = {
  getProductByUserID,
};
