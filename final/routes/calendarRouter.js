const express = require('express');

const { isLoggedIn, isNotLoggedIn } = require('../middlewares');
const { uploadCalendar, dropCalendar } = require('../controller/calendarController');

const router = express.Router();

router.post('/upload',isLoggedIn, uploadCalendar);
router.delete('/:id', isLoggedIn, dropCalendar);
module.exports = router;