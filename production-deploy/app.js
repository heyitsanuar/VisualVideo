'use strict'

//Modules
let express    = require('express');
let bodyParser = require('body-parser');
//App instance
let app = express();

//Load routes
let HomeRoutes = require('./routes/home');
let ServicesRoutes = require('./routes/services');
let GalleryRoutes = require('./routes/gallery');
let ContactRoutes = require('./routes/contact');
let EmailRoutes = require('./routes/email');

app.set("view engine", "ejs");
app.use(express.static("public"));

//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS setup
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

	next();
});

//Route loading
app.use(HomeRoutes);
app.use(ServicesRoutes);
app.use(GalleryRoutes);
app.use(ContactRoutes);
app.use(EmailRoutes);

module.exports = app;