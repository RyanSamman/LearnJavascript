require('dotenv').config();

const jwt = require('jsonwebtoken');

function getPayload(token) {
	let [, payload] = token.split('.');
	converted = new Buffer.from(payload, 'base64').toString('UTF-8');
	return JSON.parse(converted);
}

