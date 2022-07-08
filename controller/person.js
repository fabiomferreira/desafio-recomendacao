const People = require('../model/people.js')
const Person = require('../model/person.js')
const people = new People()

function isCpfValid (cpf) {
  if (cpf.length !== 11) return false

  return true
}

function isPersonValid (cpf, name) {
  if (!cpf || !name) return false
  if (!isCpfValid(cpf)) return false
  if (people.getPerson(cpf)) return false

  return true
}

function createPerson (req, res) {
  const { body: { cpf, name } } = req

  if (!isPersonValid(cpf, name)) {
    res.sendStatus(400)
    return
  }

  const newPerson = new Person(cpf, name)
  people.addPerson(newPerson)
  res.sendStatus(200)
}

function getPeople (req, res) {
  return res.send(people.getPeople())
}

function getPerson (req, res) {
  const { cpf } = req.params

  if (!cpf) return res.sendStatus(404)

  const foundPerson = people.getPerson(cpf)
  if (!foundPerson) {
    return res.sendStatus(404)
  }
  res.send(foundPerson.printPerson())
}

function deletePeople (req, res) {
  people.clearPeople()
  res.sendStatus(200)
}

function relatePeople (req, res) {
  const { cpf1, cpf2 } = req.body
  if (!isCpfValid(cpf1) || !isCpfValid(cpf2)) return res.sendStatus(404)

  const person1 = people.getPerson(cpf1)
  const person2 = people.getPerson(cpf2)
  if (!person1 || !person2) return res.sendStatus(404)

  person1.addFriend(cpf2)
  person2.addFriend(cpf1)
  res.sendStatus(200)
}

function getRecomendations (req, res) {
  const { cpf } = req.params

  if (!cpf || !isCpfValid(cpf)) return res.sendStatus(400)
  const person = people.getPerson(cpf)
  if (!person) return res.sendStatus(404)

  res.send(people.printRecommendations(person))
}

module.exports = {
  createPerson,
  getPeople,
  getPerson,
  deletePeople,
  relatePeople,
  getRecomendations
}
