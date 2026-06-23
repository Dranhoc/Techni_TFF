import z from 'zod';

export const registerValidator = z.object({
	email: z.email('email must be a valid email'),
	username: z.string().min(2).max(64),
	firstname: z.string().min(2).max(64),
	lastname: z.string().min(2).max(64),
	password: z.string().min(8).max(64),
	birthdate: z.iso.datetime(),
	NISS: z.string().regex(/^[0-9]{2}\.(0[1-9]|1[0-2])\.(0[1-9]|[1-2][0-9]|3[0-1])-[0-9]{3}\.[0-9]{2}$/gm),
	phone: z.e164(),
	status: z.enum(['active', 'inactive', 'deleted']),
});

export const loginValidator = z.object({
	email: z.email('email must be a valid email').optional(),
	username: z.string().min(2).max(64).optional(),
	password: z.string().min(8).max(64),
});
