import jwt from 'jsonwebtoken';
const { JWT_SECRET } = process.env;

export const generateToken = (user) => {
	const payload = {
		id: user.id,
		isAdmin: user.isAdmin,
	};
	return jwt.sign(payload, JWT_SECRET, { expiresIn: 60 * 60 * 2 });
};

export const decodeToken = (token) => {
	return jwt.verify(token, JWT_SECRET);
};
