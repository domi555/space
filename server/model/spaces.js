/* eslint-disable prefer-template */
/* eslint-disable guard-for-in */
const db = require('../db');

async function getSpaceByID(id) {
  const { rows } = await db.query(
    'SELECT spaces.name, spaces.id as id, spaces.description, spaces.image, count(p.id) FROM users JOIN users_spaces on users.id = users_spaces.user_id JOIN spaces on users.id = spaces.id join products p on spaces.id = p.space_id WHERE users.id = $1 group by spaces.name, spaces.id, spaces.description, spaces.image;',
    [id],
  );
  return rows;
}

const addSpace = async (body) => {
  const { rows } = await db.query('INSERT INTO spaces(name, description, image) VALUES ($1,$2,$3) RETURNING id;', [body.name, body.description, body.image]);
  return rows;
};

const addUserToSpace = async (body, id) => {
  const { rows } = await db.query('INSERT INTO users_spaces(user_id, space_id, admin) VALUES ($1,$2,$3);', [body.userid, id, body.admin]);
  return rows;
};

const changeSpace = async (id, object) => {
  const upd = [];
  for (const key in object) {
    upd.push(`${key} = '${object[key]}'`);
  }
  const cmd = 'UPDATE spaces SET ' + upd.join(', ') + ' WHERE id = $1';
  await db.query(cmd, [id]);
};

const getSpace = async (param) => {
  let result = null;
  if (param.id) {
    result = await db.query('SELECT * FROM spaces WHERE id = $1', [param.id]);
  }
  return result.rows;
};

const deleteSpace = (id) => db.query('DELETE FROM spaces WHERE id = $1', [id]);

module.exports = {
  getSpaceByID,
  addSpace,
  addUserToSpace,
  changeSpace,
  getSpace,
  deleteSpace,
};
