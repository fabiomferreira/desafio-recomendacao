const People = require('../model/people.js')
const Person = require('../model/person.js')
const people = new People();

function isPersonValid(cpf, name) {
	if(!cpf || !name) return false;
	if(cpf.length !== 11) return false;
	if(people.getPeople().find(person => person.cpf === cpf)) return false;

	return true;
}

function createPerson(req, res) {
	const {body: {cpf, name}} = req;

	if(!isPersonValid(cpf, name)) {
		res.sendStatus(400);
		return;
	}

	const newPerson = new Person(cpf, name);
	people.addPerson(newPerson);
	res.sendStatus(200);
}

function getPeople(req, res) {
	res.send(people.getPeople())
}

module.exports = {
	createPerson,
	getPeople
}