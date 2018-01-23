const express = require('express');

module.exports = () => {
	const router = express.Router();

	router.get('/test', (req, res) => {
		res.send({data: 'test web'});
	});

	return router;
};
