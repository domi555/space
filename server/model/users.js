/* eslint-disable prefer-template */
/* eslint-disable guard-for-in */
const db = require('../db');

async function getUserByID(id) {
  const { rows } = await db.query('SELECT email, first, last FROM users WHERE id = $1;', [id]);
  return rows;
}

const addUser = async (body) => {
  const { rows } = await db.query(
    'INSERT INTO users(email, first, last, password) VALUES ($1,$2,$3,$4) returning *',
    [body.email, body.first, body.last, body.password],
  );
  return rows;
};

const changeUser = async (id, object) => {
  const upd = [];
  for (const key in object) {
    upd.push(`${key} = '${object[key]}'`);
  }
  const cmd = 'UPDATE users SET ' + upd.join(', ') + ' WHERE id = $1';
  await db.query(cmd, [id]);
};

const getUser = async (param) => {
  let result = null;
  if (param.id) {
    result = await db.query('SELECT * FROM users WHERE id = $1', [param.id]);
  }
  return result.rows;
};

const getUserByEmail = async (param) => {
  let result = null;
  if (param.email) {
    result = await db.query('SELECT * FROM users WHERE email = $1', [param.email]);
  }
  return result.rows;
};

const deleteUser = (email) => db.query('DELETE FROM users WHERE email = $1', [email]);

module.exports = {
  getUserByID,
  addUser,
  changeUser,
  getUser,
  deleteUser,
  getUserByEmail,
};
