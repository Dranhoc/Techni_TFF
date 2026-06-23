import { DataTypes } from 'sequelize';
import sequelize from '../config.js';

const GeoData = sequelize.define(
	'Geodata',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		street: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		number: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		zip: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		city: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		latitude: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		longitude: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},
	{
		tableName: 'geodata',
		paranoid: true,
	},
);

export default GeoData;
