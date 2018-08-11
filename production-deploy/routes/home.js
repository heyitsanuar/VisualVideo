'use strict'

//Modules
let express   = require('express');
let api       = express.Router();
//Controller
let HomeController = require('../controllers/home');

//Routes for listings
api.get('/', HomeController.loadView); //Loads template view
api.get('/inicio', HomeController.loadView); //Loads template view

module.exports = api;