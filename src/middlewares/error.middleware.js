export const errorHandler = (err, req, res, next) => {
	console.log(err);
	const statusCode = err.statusCode || 500;
	const message = statusCode === 500 ? 'Internal server error' : err.message;
	res.status(statusCode).json({ message });
};
