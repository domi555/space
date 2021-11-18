const asyncHandler = require('express-async-handler');
const model = require('../model/space.js');

const xyz = asyncHandler(async (req, res) => {
  const abc = await model.xyz();
  return res.status(200).json({ code: 200, data: abc });
});

module.exports = {
  xyz,
};
