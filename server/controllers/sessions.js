const asyncHandler = require('express-async-handler');
const model = require('../model/sessions.js');

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    const rows = await model.getUserId(email, password);
    const uid = rows[0].id;
    if (uid) {
      req.session.userId = uid;
      res.status(200).json({ id: uid });
    } else res.status(401).send('Wrong email or password');
  } else res.status(400).send('Login failed');
});

const registerUser = asyncHandler(async (req, res) => {
  const { email, password, first, last } = req.body;
  if (email && password && first && last) {
    // ToDo: Check ob die Mail bereits verwendet wird.
    const rows = await model.createNewUser(email, password, first, last);
    if (rows[0].id > 0) res.status(200).json({ status: true });
    else res.status(400).send({ status: false });
  } else {
    res.status(400).send({ status: false });
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.SESSION_NAME);
  res.status(200).send('');
});

module.exports = {
  loginUser,
  registerUser,
  logoutUser,
};
