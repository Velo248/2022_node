const express = require('express');

const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const { signUp, signOut, updateNick, login, logout } = require('../controller/userController');

const router = express.Router();

router.post('/sign-up', isNotLoggedIn, signUp);
router.post('/sign-out', isLoggedIn, signOut);

router.post('/login', isNotLoggedIn, login);
router.get('/logout', isLoggedIn, logout);

router.post('/update-nick', isLoggedIn, updateNick);

module.exports = router;