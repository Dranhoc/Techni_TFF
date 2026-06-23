import sequelize from './config.js';
import User from './entities/user.entity.js';
import Item from './entities/item.entity.js';
import GeoData from './entities/geodata.entity.js';

User.hasOne(GeoData, { as: 'address', foreignKey: 'userId' });
GeoData.belongsTo(User, { as: 'user', foreignKey: 'userId' });

export default { User, Item, GeoData, sequelize };
