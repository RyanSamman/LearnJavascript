require('dotenv').config()

const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

const posts = [
  {
    username: 'Kyle',
    title: 'Post 1'
  },
  {
    username: 'Jim',
    title: 'Post 2'
  }
]

app.get('/posts', authenticateUser, (req, res) => {
	console.log(req.payload);
	res.json({
		'post': posts.find(post => post.username === req.payload.username),
		'timeLeft': Math.floor((new Date(req.payload.exp*1000) - new Date()) / 1000),
	});
});

function getPayload(token) {
	let [, payload] = token.split('.');
	converted = new Buffer.from(payload, 'base64').toString('UTF-8');
	return JSON.parse(converted);
}

function authenticateUser(req, res, next) {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]
	if (token == null) return res.sendStatus(401)

	console.log(getPayload(token));

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
		if (err) return res.sendStatus(403);
		console.log(payload);
		req.payload = payload;
	});
	next();
}

app.listen(3000);