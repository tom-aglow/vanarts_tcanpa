const express = require('express');
const getApiRouter = require('./api');
const getWebRouter = require('./web');

module.exports = () => {
	const router = express.Router();
	router.use('/api', getApiRouter());
	router.use('/', getWebRouter());
	return router;
};

