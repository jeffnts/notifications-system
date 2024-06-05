import { z } from 'zod'
import { REQUIRED_FIELD } from '@/consts/errors'

export const schema = z.object({
  name: z.string().min(1, REQUIRED_FIELD),
  channels: z.any(),
})

type InitialSchemaFormData = z.infer<typeof schema>

type ExtendedSchemaFormData = InitialSchemaFormData & { id: string }

export type SchemaFormData = Omit<ExtendedSchemaFormData, 'channels'> & {
  channels: string[]
}
