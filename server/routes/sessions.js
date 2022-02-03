const express = require('express');
const { loginUser, registerUser, logoutUser } = require('../controllers/sessions');

const router = express.Router();

// Routen Absicherung funktioniert noch nicht da wir den Server und Client
// getrennt betreiben und nicht so wie im Arbeitsblatt User-Sessions von der 4 Klasse

// const redirectLogin = (req, res, next) => {
//   if (!req.session.userId) res.status(400).send('You are not logged in!');
//   else next();
// };

router.post('/login', loginUser);
router.post('/register', registerUser);

// router.get('/logout', redirectLogin, logoutUser);
router.get('/logout', logoutUser);

module.exports = router;
