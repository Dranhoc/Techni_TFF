import z from 'zod';

export const registerValidator = z.object({
	email: z.email('email must be a valid email'),
	username: z.string().min(2).max(64),
	firstname: z.string().min(2).max(64),
	lastname: z.string().min(2).max(64),
	password: z.string().min(8).max(64),
	NISS: z.string(),
	phone: z.string(),
	status: z.enum(['active', 'inactive', 'deleted']),
});

export const loginValidator = z.object({
	email: z.email('email must be a valid email').optional(),
	username: z.string().min(2).max(64).optional(),
	password: z.string().min(8).max(64),
});
