'use strict'

//Modules
let express   = require('express');
let api       = express.Router();
//Controller
let ContactController = require('../controllers/contact');
let HomeController = require('../controllers/home');

//Routes for listings
api.get('/contacto', ContactController.loadView); //Gets all existing products
api.get('/*', HomeController.redirect);

module.exports = api;