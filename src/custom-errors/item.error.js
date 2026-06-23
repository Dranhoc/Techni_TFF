export class ItemNotFoundError extends Error {
	statusCode = 404;
	constructor() {
		super('Item not found');
	}
}
