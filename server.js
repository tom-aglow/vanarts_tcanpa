const express = require('express');
const cors = require('cors');

const getRouter = require('./routes');

const start = async () => {

	//	CREATING A SERVER
	const app = express();
	app.use(cors());

	// 	ROUTES
	app.use(getRouter());

	//	CLIENT CONFIG

	// Express only serves static assets in production
	if (process.env.NODE_ENV === 'production') {
		app.use(express.static('client'));
	}

	//	SERVER START
	return new Promise(resolve => {
		const port = process.env.PORT || 5000;
		const server = app.listen(port, () => {
			console.log(`Find the server at: http://localhost:${port}/`); // eslint-disable-line no-console
			resolve(server);
		});
	});
};

if (process.env.NODE_ENV !== 'test') {
	start();
}

module.exports = start;
