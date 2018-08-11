'use strict'

//Modules
let express   = require('express');
let api       = express.Router();
//Controller
let GalleryController = require('../controllers/gallery');

//Routes for listings
api.get('/nuestros-trabajos', GalleryController.loadView); //Loads template view

module.exports = api;