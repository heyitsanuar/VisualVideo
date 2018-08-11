'use strict'

//Modules
let express   = require('express');
let api       = express.Router();
//Controller
let EmailController = require('../controllers/email');

//Routes for listings
api.post('/send-email', EmailController.sendEmail); //Gets all existing products

module.exports = api;