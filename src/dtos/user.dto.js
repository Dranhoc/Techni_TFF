export class UserListingDTO {
	id;
	email;
	pseudo;
	isAdmin;

	constructor(user) {
		this.id = user.id;
		this.email = user.email;
		this.pseudo = user.pseudo;
		this.isAdmin = user.isAdmin;
	}
}

export class UserDetailsDTO {
	id;
	pseudo;
	email;
	isAdmin;
	createdAt;
	updatedAt;

	constructor(user) {
		this.id = user.id;
		this.pseudo = user.pseudo;
		this.email = user.email;
		this.isAdmin = user.isAdmin;
		this.createdAt = user.createdAt;
		this.updatedAt = user.updatedAt;
	}
}
