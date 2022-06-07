const Calendar = require('../models/calendar')

exports.uploadCalendar = async (req, res, next) => {
    try {
        await Calendar.create({
            title: req.body.title,
            content: req.body.content,
            date: req.body.date,
            UserId: req.user.id,
        });
        res.redirect('/main');
    }
    catch (error) {
        console.error(error);
        next(error);
    }
};

exports.dropCalendar = async (req, res, next) => {
    try {
        await Calendar.destroy({
        where: { id: req.params.id }
      });
      res.send('OK');
    }
    catch (error) {
      console.error(error);
      next(error);
    }
};