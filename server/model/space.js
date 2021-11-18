const db = require('../db');

const xyz = async () => {
  const { rows } = await db.query('select * from');
  return rows;
};

module.exports = {
  xyz,
};
