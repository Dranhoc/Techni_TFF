import { DataTypes } from 'sequelize';
import sequelize from '../config.js';

const Item = sequelize.define(
	'Item',
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
	},
	{
		tableName: 'items',
		paranoid: true,
	},
);

export default Item;
