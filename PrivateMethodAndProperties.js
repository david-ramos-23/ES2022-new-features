class User {
	#id;
	email;

	#validateEmail(email) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			return true;
		}
		throw new Error('Invalid email');
	}

	constructor(email) {
		this.#validateEmail(email);
		this.#id = 1;
		this.email = email;
	}
}

const user = new User('dramos@squareup.com');
console.log(user.#id === 1);
console.log(user.#validateEmail('dramos@squareup.com'));
