class People {
  #people
  constructor (people = []) {
    this.#people = people
  }

  getPeople () {
    return this.#people.map(person => person.printPerson())
  }

  getPerson (cpf) {
    const person = this.#people.find(person => person.getCpf() === cpf)

    return person
  }

  updatePerson (personToUpdate) {
    const index = this.#people.findIndex(person => person.getCpf() === personToUpdate.getCpf())
    this.#people[index] = personToUpdate
  }

  addPerson (person) {
    this.#people.push(person)
  }

  clearPeople () {
    this.#people = []
  }
}

module.exports = People
