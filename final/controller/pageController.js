const Calendar = require('../models/calendar');
const User = require('../models/user');
const sequelize = require("sequelize");
const Op = sequelize.Op;

exports.render = (req, res) => {
    res.render('welcome');
};

exports.renderMain = async (req, res, next) => {
    try {
        const calendars = await Calendar.findAll({
            include: {
                model: User,
                attributes: ['id', 'nick'],
            },
            order: [['date', 'DESC']],
            where: { UserId: req.user.id },
        });
        res.render('todo', {
            todos: calendars,
        });
    }
    catch (error) {
        console.error(error);
        next(error);
    }

};

exports.renderSearch = async (req, res, next) => {
    try {
        const calendars = await Calendar.findAll({
            include: {
                model: User,
                attributes: ['id', 'nick'],
            },
            order: [['date', 'DESC']],
            where: { 
                UserId: req.user.id,
                content: { [Op.like]: "%" + req.query.search + "%" }
             },
        });
        res.render('todo', {
            todos: calendars,
        });
    }
    catch (error) {
        console.error(error);
        next(error);
    }
};

exports.renderSignUp = (req, res) => {
    res.render('signUp');
};

exports.renderLogin = (req, res) => {
    res.render('login');
};

exports.renderProfile = (req, res) => {
    res.render('profile');
};