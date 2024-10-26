import { z } from 'zod';

export const feedbackFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  message: z
    .string()
    .min(15, { message: 'Message must be at least 10 characters long' })
    .max(500, { message: 'Message must be less than 500 characters' }),
});

export const commentFormSchema = z.object({
  commentName: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must be less than 50 characters' }),
  commentEmail: z.string().email({ message: 'Please enter a valid email address' }),
  commentText: z
    .string()
    .min(15, { message: 'Message must be at least 10 characters long' })
    .max(250, { message: 'Message must be less than 500 characters' }),
});
