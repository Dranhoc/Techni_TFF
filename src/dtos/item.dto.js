export class ItemDTO {
	id;
	name;
	description;
	userId;
	createdAt;
	updatedAt;

	constructor(item) {
		this.id = item.id;
		this.name = item.name;
		this.description = item.description;
		this.userId = item.userId;
		this.createdAt = item.createdAt;
		this.updatedAt = item.updatedAt;
	}
}
