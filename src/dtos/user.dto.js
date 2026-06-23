export class UserListingDTO {
	id;
	email;
	username;
	isAdmin;

	constructor(user) {
		this.id = user.id;
		this.email = user.email;
		this.username = user.username;
		this.isAdmin = user.isAdmin;
	}
}

export class UserDetailsDTO {
	id;
	username;
	firstname;
	lastname;
	email;
	phone;
	NISS;
	status;
	isAdmin;
	createdAt;
	updatedAt;

	constructor(user) {
		this.id = user.id;
		this.username = user.username;
		this.firstname = user.firstname;
		this.lastname = user.lastname;
		this.email = user.email;
		this.NISS = user.NISS;
		this.phone = user.phone;
		this.status = user.status;
		this.isAdmin = user.isAdmin;
		this.createdAt = user.createdAt;
		this.updatedAt = user.updatedAt;
	}
}
