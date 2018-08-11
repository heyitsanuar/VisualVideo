'use strict'

//Modules
let express   = require('express');
let api       = express.Router();
//Controller
let ServicesController = require('../controllers/services');

//Routes for listings
api.get('/servicios', ServicesController.loadView); //Loads template view

module.exports = api;