export class EmailAlreadyExistsError extends Error {
	statusCode = 400;
	constructor() {
		super('Email already exists');
	}
}

export class UsernameAlreadyExistsError extends Error {
	statusCode = 400;
	constructor() {
		super('Username already exists');
	}
}

export class InvalidCredentialsError extends Error {
	statusCode = 400;
	constructor() {
		super('Invalid credentials');
	}
}

export class NoUsernameOrEmailProvidedError extends Error {
	statusCode = 400;
	constructor() {
		super('No email or username provided');
	}
}

export class UserNotFoundError extends Error {
	statusCode = 404;
	constructor() {
		super('User not found');
	}
}
