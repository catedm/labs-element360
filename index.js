const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assests
	// like main.js file, or main.css file
	// this code says, if anything is requested and we don't already have a route handler
	// set up for it, look in the client/build directory
	app.use(express.static('client/build'));

	// Exress will serve up the index.html file
	// if it does not recognize the route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// //Static file declaration
// app.use(express.static(path.join(__dirname, 'client/build')));

// //production mode
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, 'client/build')));
//   //
//   app.get('*', (req, res) => {
//     res.sendfile(path.join(__dirname = 'client/build/index.html'));
//   })
// }
// //build mode
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/public/index.html'));
// })

require('./routes/gtMetrixRoutes')(app);

const PORT = process.env.PORT || 3030;
app.listen(PORT);

module.exports = app;
