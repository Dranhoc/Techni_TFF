import db from '../database/index.js';
import { ItemNotFoundError } from '../custom-errors/item.error.js';

const itemService = {
	getAll: async () => await db.Item.findAll(),
	getById: async (id) => {
		const item = await db.Item.findByPk(id);
		if (!item) throw new ItemNotFoundError();
		return item;
	},
	create: async (data, userId) => await db.Item.create({ ...data, userId }),
	update: async (id, data) => {
		const item = await db.Item.findByPk(id);
		if (!item) throw new ItemNotFoundError();
		return await item.update(data);
	},
	delete: async (id) => {
		const item = await db.Item.findByPk(id);
		if (!item) throw new ItemNotFoundError();
		await item.destroy();
	},
};

export default itemService;
