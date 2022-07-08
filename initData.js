const fetch =
  (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args))

const baseURL = 'http://localhost:3000'
const PERSON_ENDPOINT = '/person'
const RELATIONSHIP_ENDPOINT = '/relationship'
const people = [
  {
    cpf: '11111111111',
    name: 'Fulano da Silva'
  },
  {
    cpf: '22222222222',
    name: 'Ciclano da Silva'
  },
  {
    cpf: '33333333333',
    name: 'Beltrano Souza'
  },
  {
    cpf: '44444444444',
    name: 'João Souza'
  },
  {
    cpf: '55555555555',
    name: 'Maria Souza'
  }
]

const relationships = [
  {
    cpf1: '11111111111',
    cpf2: '22222222222'
  },
  {
    cpf1: '11111111111',
    cpf2: '33333333333'
  },
  {
    cpf1: '22222222222',
    cpf2: '33333333333'
  },
  {
    cpf1: '22222222222',
    cpf2: '44444444444'
  },
  {
    cpf1: '33333333333',
    cpf2: '44444444444'
  },
  {
    cpf1: '33333333333',
    cpf2: '55555555555'
  }
]

const options = {
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
  method: 'POST'
}

const promises = people.map(
  person =>
    fetch(baseURL + PERSON_ENDPOINT, { ...options, body: JSON.stringify(person) })
)

Promise.all(promises).then(() => {
  relationships.forEach(
    relationship =>
      fetch(baseURL + RELATIONSHIP_ENDPOINT, {
        ...options, body: JSON.stringify(relationship)
      })
  )
})
