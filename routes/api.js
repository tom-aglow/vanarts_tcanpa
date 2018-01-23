const express = require('express');

const apiController = require('../controllers/api');

module.exports = () => {
	const router = express.Router();

	router.get('/test', apiController.test);

	return router;
};
