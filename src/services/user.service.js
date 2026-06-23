import db from '../database/index.js';
import bcrypt from 'bcrypt';
import { EmailAlreadyExistsError, InvalidCredentialsError, NoUsernameOrEmailProvidedError, UsernameAlreadyExistsError } from '../custom-errors/user.error.js';
const { ENCRYPTION_ROUND } = process.env;

const userService = {
	create: async (data) => {
		if (data.email) {
			const existingEmail = await db.User.findOne({ where: { email: data.email } });
			if (existingEmail) throw new EmailAlreadyExistsError();
		}
		if (data.username) {
			const existingUsername = await db.User.findOne({ where: { username: data.username } });
			if (existingUsername) throw new UsernameAlreadyExistsError();
		}
		if (data.password) {
			data.password = bcrypt.hashSync(data.password, +ENCRYPTION_ROUND);
		}
		return await db.User.create(data);
	},
	login: async (credentials) => {
		if (!credentials.username && !credentials.email) {
			throw new NoUsernameOrEmailProvidedError();
		}
		const field = credentials.email ? 'email' : 'username';
		const value = credentials.email || credentials.username;
		const user = await db.User.findOne({ where: { [field]: value } });
		if (!user) throw new InvalidCredentialsError();
		const isValid = bcrypt.compareSync(credentials.password, user.password);
		if (!isValid) throw new InvalidCredentialsError();
		return user;
	},
	getAll: async () => await db.User.findAll(),
	getById: async (userId) => await db.User.findByPk(userId),
};

export default userService;
