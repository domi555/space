const db = require('../db');

async function getSpaceByID(query) {
  const { id } = query;
  const { rows } = await db.query(
    'SELECT name, description, image FROM users JOIN users_spaces on users.id = users_spaces.user_id JOIN spaces on users.id = spaces.id WHERE users.id = $1;',
    [id],
  );
  return rows;
}

module.exports = {
  getSpaceByID,
};
