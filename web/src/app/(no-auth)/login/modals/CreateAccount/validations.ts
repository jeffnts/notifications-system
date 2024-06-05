import { z } from 'zod'
import {
  REQUIRED_FIELD,
  INVALID_EMAIL,
  EMAIL_NOT_MATCH,
  PASSWORD_NOT_MATCH,
} from '@/consts/errors'

export const schema = z
  .object({
    name: z.string().min(1, REQUIRED_FIELD),
    email: z.string().email(INVALID_EMAIL).min(1, REQUIRED_FIELD),
    emailConfirmation: z.string().min(1, REQUIRED_FIELD),
    password: z.string().min(1, REQUIRED_FIELD),
    passwordConfirmation: z.string().min(1, REQUIRED_FIELD),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: PASSWORD_NOT_MATCH,
    path: ['passwordConfirmation'],
  })
  .refine((data) => data.email === data.emailConfirmation, {
    message: EMAIL_NOT_MATCH,
    path: ['emailConfirmation'],
  })

export type SchemaFormData = z.infer<typeof schema>
