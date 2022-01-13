const db = require('../db');

async function getUserByID(id) {
  const { rows } = await db.query('SELECT email, first, last FROM users WHERE id = $1;', [id]);
  return rows;
}

const addUser = async (body) => {
  const { rows } = await db.query(
    'INSERT INTO users(email, first, last, password) VALUES ($1,$2,$3,$4); returning *',
    [body.email, body.first, body.last, body.password],
  );
  return rows;
};

module.exports = {
  getUserByID,
  addUser,
};
