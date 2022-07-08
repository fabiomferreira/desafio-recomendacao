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

  printRecommendations (person) {
    const directFriends = person.getFriends()
    const numberOfConections = {}
    directFriends.forEach(
      friend => {
        const currentFriendsOfFriends = this.getPerson(friend).getFriends()
        currentFriendsOfFriends.forEach(
          currentFriend => {
            console.log(numberOfConections[currentFriend])
            numberOfConections[currentFriend] =
            numberOfConections[currentFriend]
              ? numberOfConections[currentFriend] + 1
              : 1
          })
      }
    )
    const friendsOfFriends = Object.keys(numberOfConections).sort(
      (a, b) => numberOfConections[b] - numberOfConections[a]
    )
    const recommendations = friendsOfFriends.filter(
      friend =>
        !directFriends.includes(friend) && friend !== person.getCpf()
    )
    return recommendations
  }
}

module.exports = People
