const routes = require('express').Router();

const myController = require('../controllers/index.js');

routes.get('/',myController.getData);



module.exports = routes;

