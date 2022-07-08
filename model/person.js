class Person {
	#cpf;
	#name;
	constructor(cpf, name) {
		this.#cpf = cpf;
		this.#name = name;
	}

	getCpf() {
		return this.#cpf;
	}

	getName() {
		return this.#name;
	}

}

module.exports = Person;