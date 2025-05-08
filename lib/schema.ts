import { z } from 'zod'

export const FormDataSchema = z.object({
  name: z.string().nonempty('Name is required.')
        .min(4, { message: 'Name must be at least 4 characters.' }),
  message: z
    .string()
    .nonempty('Message is required.')
    .min(6, { message: 'Message must be at least 6 characters.' })
})