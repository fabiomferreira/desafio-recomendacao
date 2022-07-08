const express = require('express');
const controller = require('../controller/person');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('API is working!')
})

router.post('/person', (req, res) => {
	controller.createPerson(req, res)
})

router.get('/person', (req, res) => {
	controller.getPeople(req, res)
})

module.exports =
	router
