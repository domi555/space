const { Pool } = require('pg');

const pool = new Pool();
// ToDo: maxpool size

module.exports = {
  query: (text, params) => pool.query(text, params),
};
