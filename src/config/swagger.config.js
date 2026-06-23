import swaggerJsdoc from 'swagger-jsdoc';
import 'dotenv/config';

const { APP_PORT, APP_URL } = process.env;

const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'Express Starter API',
			version: '1.0.0',
			description: 'Express Starter API documentation',
		},
		servers: [{ url: `${APP_URL}:${APP_PORT}` }],
	},
	apis: ['./src/routers/*.router.js'],
};

export default swaggerJsdoc(options);
