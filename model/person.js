class Person {
  #cpf
  #name
  #friends
  constructor (cpf, name) {
    this.#cpf = cpf
    this.#name = name
    this.#friends = []
  }

  getCpf () {
    return this.#cpf
  }

  getName () {
    return this.#name
  }

  addFriend (newFriend) {
    const friendExists = this.#friends.find(friend => friend === newFriend)
    if (friendExists) return
    this.#friends.push(newFriend)
  }

  getFriends () {
    return this.#friends
  }

  printPerson () {
    return {
      cpf: this.#cpf,
      name: this.#name
    }
  }
}

module.exports = Person
