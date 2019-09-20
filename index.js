const path = require('path');				// use path module
const fs = require('fs');
const express = require('express');			// Use express module
const bodyParser = require('body-parser');	// Use bodyParser middleware
const hbs = require('./lib/hbs_helper');					// Use hbs view engine
const app = express();

// hbs partial file
hbs.registerPartial('navbar', fs.readFileSync(__dirname + '/views/layouts/navbar.hbs', 'utf8'));
hbs.registerPartial('sidebar', fs.readFileSync(__dirname + '/views/layouts/sidebar.hbs', 'utf8'));
hbs.registerPartial('footer', fs.readFileSync(__dirname + '/views/layouts/footer.hbs', 'utf8'));

// Set view files
app.set('views', path.join(__dirname, 'views'));

// Set view engine
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Set public folder as static folder for static files
app.use('/assets', express.static(__dirname + '/public'));

// Routes
app.use(require('./route/product'));
app.use(require('./route/supplier'));
app.use(require('./route/rajaongkir'));


app.listen(3000, () => {
	console.log('Server is running at port 3000');
});