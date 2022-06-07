const express = require('express');
const router = express.Router();
const { render, renderSignUp, renderLogin, renderProfile, renderMain, renderSearch } = require('../controller/pageController');

router.use((req, res, next) => {
    res.locals.user = req.user;
    next();
  });

router.get('/', render);
router.get('/main', renderMain);
router.get('/sign-up', renderSignUp);
router.get('/login', renderLogin);
router.get('/profile', renderProfile);
router.get('/search', renderSearch);
module.exports = router;
