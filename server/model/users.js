const db = require('../db');

async function getUserByID(query) {
  const { id } = query;
  const { rows } = await db.query('SELECT email, first, last FROM users WHERE id = $1;', [id]);
  return rows;
}

module.exports = {
  getUserByID,
};
