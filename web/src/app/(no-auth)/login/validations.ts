import { z } from 'zod'
import { REQUIRED_FIELD, INVALID_EMAIL } from '@/consts/errors'

export const schema = z.object({
  email: z.string().email(INVALID_EMAIL).min(1, REQUIRED_FIELD),
  password: z.string().min(1, REQUIRED_FIELD),
})

export type SchemaFormData = z.infer<typeof schema>
