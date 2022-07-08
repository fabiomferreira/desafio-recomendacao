class People {
  #people
  constructor (people = []) {
    this.#people = people
  }

  getPeople () {
    return this.#people.map(person => ({ cpf: person.getCpf(), name: person.getName() }))
  }

  addPerson (person) {
    this.#people.push(person)
  }
}

module.exports = People
