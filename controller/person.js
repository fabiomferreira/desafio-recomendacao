const People = require('../model/people.js')
const Person = require('../model/person.js')
const people = new People()

function isCpfValid (cpf) {
  if (cpf.length !== 11) return false
  if (people.getPeople().find(person => person.cpf === cpf)) return false

  return true
}

function isPersonValid (cpf, name) {
  if (!cpf || !name) return false
  if (!isCpfValid(cpf)) return false

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

function getPerson (req, res) {
  const { cpf } = req.params

  if (!cpf) return res.sendStatus(404)

  const foundPerson = people.getPeople().find(person => person.cpf === cpf)
  if (!foundPerson) {
    return res.sendStatus(404)
  }
  res.send(foundPerson)
}

function deletePeople (req, res) {
  people.clearPeople()
  res.sendStatus(200)
}

function relatePeople (req, res) {
  const { cpf1, cpf2 } = req.body
  if (!isCpfValid(cpf1) || !isCpfValid(cpf2)) return res.send(404)
  // TODO: fazer relacionamento entre os cpfs
  res.send(200)
}

module.exports = {
  createPerson,
  getPerson,
  deletePeople,
  relatePeople
}
