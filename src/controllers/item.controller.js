import itemService from '../services/item.service.js';
import { ItemDTO } from '../dtos/item.dto.js';

const itemController = {
	getAll: async (req, res) => {
		const items = await itemService.getAll();
		res.status(200).json(items.map((i) => new ItemDTO(i)));
	},
	getById: async (req, res) => {
		const item = await itemService.getById(req.params.id);
		res.status(200).json(new ItemDTO(item));
	},
	create: async (req, res) => {
		const item = await itemService.create(req.data, req.user.id);
		res.status(201).json(new ItemDTO(item));
	},
	update: async (req, res) => {
		const item = await itemService.update(req.params.id, req.data);
		res.status(200).json(new ItemDTO(item));
	},
	delete: async (req, res) => {
		await itemService.delete(req.params.id);
		res.status(204).send();
	},
};

export default itemController;
