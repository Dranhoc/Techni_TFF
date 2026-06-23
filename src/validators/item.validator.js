import z from 'zod';

export const createItemValidator = z.object({
	name: z.string().min(1).max(128),
	description: z.string().max(1024).optional(),
});

export const updateItemValidator = z.object({
	name: z.string().min(1).max(128).optional(),
	description: z.string().max(1024).optional(),
});
