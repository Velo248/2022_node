const express = require('express');

const { isLoggedIn } = require('../middlewares');
const { follow, unfollow, profile } = require('../controllers/user');

const router = express.Router();

// POST /user/:id/follow
router.post('/:id/follow', isLoggedIn, follow);
router.post('/:id/unfollow', isLoggedIn, unfollow);
router.post('/profile', isLoggedIn, profile)
module.exports = router;
