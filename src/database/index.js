import sequelize from './config.js';
import User from './entities/user.entity.js';
import Item from './entities/item.entity.js';

User.hasMany(Item, { as: 'items', foreignKey: 'userId' });
Item.belongsTo(User, { as: 'owner', foreignKey: 'userId' });

export default { User, Item, sequelize };
