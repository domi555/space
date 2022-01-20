const db = require('../db');

async function getUserId(email, password) {
  const { rows } = await db.query('select id from users where email = $1 and password = $2;', [email, password]);
  return rows;
}

async function createNewUser(email, password, firstname, lastname) {
  const { rows } = await db.query('insert into users(email, first, last, password) values ($1, $2, $3, $4) returning id', [email, firstname, lastname, password]);
  return rows;
}

module.exports = {
  getUserId,
  createNewUser,
};
